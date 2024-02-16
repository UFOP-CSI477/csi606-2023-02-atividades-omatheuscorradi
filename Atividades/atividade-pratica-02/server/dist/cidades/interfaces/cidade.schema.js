"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CidadeSchema = void 0;
const mongoose = require("mongoose");
exports.CidadeSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    estado_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Estado', required: true },
}, { timestamps: true, collection: 'cidades' });
//# sourceMappingURL=cidade.schema.js.map