import { Direccion } from './direccion.dto';
import { Aseguradora } from './aseguradora.dto';

export class CreatePacienteDto {
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