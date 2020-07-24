import { Direccion } from '../dtos/direccion.dto';
import { Document } from 'mongoose';

enum TipoProfesional {
    MEDICO = 1,
    ENFERMERO,
    ADMINISTRATIVO
}

export interface Profesional extends Document {
    readonly numColegiado: string;
    readonly NIF: string;
    readonly nombre: string;
    readonly primerApellido: string;
    readonly segundoApellido: string;
    readonly genero: string;
    readonly fechaNacimiento: Date;
    readonly createdAt: Date;
    readonly direccion: Direccion;
    readonly tipoProfesional: TipoProfesional;
}