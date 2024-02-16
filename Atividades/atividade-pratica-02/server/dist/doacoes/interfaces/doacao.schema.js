"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoacaoSchema = void 0;
const mongoose = require("mongoose");
exports.DoacaoSchema = new mongoose.Schema({
    pessoa_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Pessoa', required: true },
    local_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Local', required: true },
    data: { type: Date, required: true },
}, { timestamps: true, collection: 'doacoes' });
//# sourceMappingURL=doacao.schema.js.map