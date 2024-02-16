"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoSchema = void 0;
const mongoose = require("mongoose");
exports.TipoSchema = new mongoose.Schema({
    tipo: { type: String, required: true },
    fator: { type: String, required: true },
}, { timestamps: true, collection: 'tipos' });
//# sourceMappingURL=tipo.schema.js.map