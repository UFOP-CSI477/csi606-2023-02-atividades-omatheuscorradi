import * as mongoose from 'mongoose';

export const CidadeSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    estado_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Estado', required: true },
}, { timestamps: true, collection: 'cidades' });
