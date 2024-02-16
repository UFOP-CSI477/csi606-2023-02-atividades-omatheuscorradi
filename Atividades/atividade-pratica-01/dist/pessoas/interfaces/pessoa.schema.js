"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaSchema = void 0;
const mongoose = require("mongoose");
exports.PessoaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    rua: { type: String, required: true },
    numero: { type: String, required: true },
    complemento: { type: String, required: true },
    rg: { type: String, required: true },
    cidade_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cidade', required: true },
    tipo_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tipo', required: true },
}, { timestamps: true, collection: 'pessoas' });
//# sourceMappingURL=pessoa.schema.js.map