import * as mongoose from 'mongoose';

export const LocalSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    rua: { type: String, required: true },
    numero: { type: String, required: true },
    complemento: { type: String, required: true },
    cidade_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cidade', required: true },
}, { timestamps: true, collection: 'locais' });
