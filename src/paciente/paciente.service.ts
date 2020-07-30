import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Paciente } from './interfaces/paciente.interface';
import { CreatePacienteDto } from './dtos/paciente.dto';

@Injectable()
export class PacienteService {

    constructor(@InjectModel('Paciente') private readonly pacientModel: Model<Paciente>) { }

    async createPaciente(createPacienteDto: CreatePacienteDto): Promise<Paciente> {
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

    async updatePaciente(idPac: string, createPacienteDto: CreatePacienteDto): Promise<Paciente> {
        const updPac = await this.pacientModel.findOneAndUpdate({ _id: idPac }, createPacienteDto, { useFindAndModify: false, new: true })
        return updPac;
    }

    async deletePaciente(id: string): Promise<Paciente> {
        const dltPac = await this.pacientModel.findByIdAndDelete(id);
        return dltPac;

    }

    /* async createTask(createTaskDto:CreateTaskDto){
        
        const createdTask =  new this.taskModel(createTaskDto);
        const session = await createdTask.db.startSession();
        
        try{
            session.startTransaction();
            let result = await this.taskModel.create([{"title":createTaskDto.title,"description":createTaskDto.description,"status":""}],{session: session})    
            await session.commitTransaction();
        }catch (error){
            Logger.error(error);
            await session.abortTransaction();
            
        }finally{
            session.endSession();
        }
    } */
}
