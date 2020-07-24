import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Paciente } from './interfaces/paciente.interface';
import { CreatePacienteDto } from './dtos/paciente.dto';

@Injectable()
export class PacienteService {

    constructor(@InjectModel('Paciente') private readonly pacientModel: Model<Paciente>) { }

    async createPacient(createPacienteDto: CreatePacienteDto): Promise<Paciente> {
        const pacient = new this.pacientModel(createPacienteDto);
        return await pacient.save();
    }

    async getPacientes(): Promise<Paciente[]> {
        const pacientes = await this.pacientModel.find();
        return pacientes;
    }

    async getPacientById(idProf: string): Promise<Paciente> {
        const idPaciente = await this.pacientModel.findById(idProf);
        return idPaciente;
    }

    async deletePaciente(id: string): Promise<Paciente> {
        const dltPac = await this.pacientModel.findByIdAndDelete(id);
        return dltPac;

    }

}
