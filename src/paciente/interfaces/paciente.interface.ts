import { Document } from 'mongoose';
import { Aseguradora } from '../dtos/aseguradora.dto';
import { Direccion } from '../dtos/direccion.dto';

export interface Paciente extends Document {
    readonly NHC: string;
    readonly nombre: string;
    readonly primerApellido: string;
    readonly segundoApellido: string;
    readonly genero: string;
    readonly fechaNacimiento: Date;
    readonly createdAt: Date;
    readonly listadoAseguradoras: Aseguradora[];
    readonly direccion: Direccion;
}