"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalSchema = void 0;
const mongoose = require("mongoose");
exports.LocalSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    rua: { type: String, required: true },
    numero: { type: String, required: true },
    complemento: { type: String, required: true },
    cidade_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cidade', required: true },
}, { timestamps: true, collection: 'locais' });
//# sourceMappingURL=local.schema.js.map