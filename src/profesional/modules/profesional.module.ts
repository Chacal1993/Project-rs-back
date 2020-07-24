import { Module } from '@nestjs/common';
import { ProfesionalController } from '../controllers/profesional.controller';
import { ProfesionalService } from '../profesional.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfesionalSchema } from '../schemas/profesional.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Profesional', schema: ProfesionalSchema }
    ])
  ],
  controllers: [ProfesionalController],
  providers: [ProfesionalService]
})
export class ProfesionalModule { }
