import { Module } from '@nestjs/common';
import { PacienteController } from '../controllers/paciente.controller';
import { PacienteService } from '../paciente.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PacienteSchema } from '../schemas/paciente.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Paciente', schema: PacienteSchema }
        ])
    ],
    controllers: [PacienteController],
    providers: [PacienteService]
})
export class PacienteModule { }
