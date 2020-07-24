import { Schema } from 'mongoose';

export const ProfesionalSchema = new Schema({
    numColegiado: { type: String, required: true },
    nombre: { type: String, required: true },
    primerApellido: { type: String, required: true },
    segundoApellido: String,
    genero: String,
    fechaNacimiento: Date,
    createdAt: { type: Date, default: Date.now },
    tipoProfesional: Number,
    direccion: {
        calle: String,
        numero: String,
        puerta: String,
        codigoPostal: String,
        ciudad: String
    }

});