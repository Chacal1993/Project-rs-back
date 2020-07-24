import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/modules/paciente.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfesionalModule } from './profesional/modules/profesional.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), PacienteModule, ProfesionalModule, MongooseModule.forRoot(`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.bmlox.mongodb.net/project-rs-db?retryWrites=true&w=majority`), ProfesionalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
