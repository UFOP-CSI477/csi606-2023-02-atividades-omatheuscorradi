import * as mongoose from 'mongoose';

export const DoacaoSchema = new mongoose.Schema({
    pessoa_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Pessoa', required: true },
    local_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'Local', required: true },
    data: { type: Date, required: true },
}, { timestamps: true, collection: 'doacoes' });
