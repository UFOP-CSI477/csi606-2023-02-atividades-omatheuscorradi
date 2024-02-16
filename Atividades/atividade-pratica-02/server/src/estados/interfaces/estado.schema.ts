import * as mongoose from 'mongoose';

export const EstadoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sigla: { type: String, required: true },
}, { timestamps: true, collection: 'estados' });
