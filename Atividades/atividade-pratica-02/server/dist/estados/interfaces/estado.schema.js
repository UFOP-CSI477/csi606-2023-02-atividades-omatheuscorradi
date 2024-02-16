"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadoSchema = void 0;
const mongoose = require("mongoose");
exports.EstadoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sigla: { type: String, required: true },
}, { timestamps: true, collection: 'estados' });
//# sourceMappingURL=estado.schema.js.map