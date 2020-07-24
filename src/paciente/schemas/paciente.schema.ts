import { Schema } from 'mongoose';


export const PacienteSchema = new Schema({
    NHC: { type: String, required: true },
    nombre: { type: String, required: true },
    primerApellido: { type: String, required: true },
    segundoApellido: String,
    genero: String,
    fechaNacimiento: Date,
    createdAt: { type: Date, default: Date.now },
    listadoAseguradoras:
        [{
            numTarjeta: String,
            nombreAseguradora: String,
            tipoSeguro: Number
        }],
    direccion: {
        calle: String,
        numero: String,
        puerta: String,
        codigoPostal: String,
        ciudad: String
    }

});
