import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProfesionalDto } from './dtos/profesional.dto';
import { Profesional } from './interfaces/profesional.interface';
import { Model } from 'mongoose';
import { async } from 'rxjs';

@Injectable()
export class ProfesionalService {

    constructor(@InjectModel('Profesional') private readonly profesionalModel: Model<Profesional>) { }

    async createProfesional(createProfesionalDto: CreateProfesionalDto): Promise<Profesional> {
        const prof = new this.profesionalModel(createProfesionalDto);
        return await prof.save();
    }

    async getProfesionales(): Promise<Profesional[]> {
        const profesionales = await this.profesionalModel.find();
        return profesionales;
    }

    async getProfesionalById(idProf: string): Promise<Profesional> {
        const idprofesional = await this.profesionalModel.findById(idProf);
        return idprofesional;
    }

    async deleteProfesional(id: string): Promise<Profesional> {
        const dltProf = await this.profesionalModel.findByIdAndDelete(id);
        return dltProf;
    }

    async deleteMedicos() {
        const dltMed = await this.profesionalModel.deleteMany({ tipoProfesional: 1 })
        return dltMed;
    }
}
