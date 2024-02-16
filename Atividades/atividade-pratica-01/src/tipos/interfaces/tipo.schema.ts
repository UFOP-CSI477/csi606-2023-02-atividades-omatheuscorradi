import * as mongoose from 'mongoose';

export const TipoSchema = new mongoose.Schema({
    tipo: { type: String, required: true },
    fator: { type: String, required: true },
}, { timestamps: true, collection: 'tipos' });
