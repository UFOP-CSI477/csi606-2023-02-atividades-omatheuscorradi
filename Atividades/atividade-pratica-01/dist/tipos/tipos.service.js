"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var TipoService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TipoService = TipoService_1 = class TipoService {
    constructor(tipoModel) {
        this.tipoModel = tipoModel;
        this.logger = new common_1.Logger(TipoService_1.name);
    }
    async createTipo(criarTipoDto) {
        const tipoCriado = await new this.tipoModel(criarTipoDto);
        return tipoCriado.save();
    }
    async updateTipo(_id, atualizarTipoDto) {
        const tipoEncontrado = await this.tipoModel.findOne({ _id }).exec();
        if (!tipoEncontrado) {
            throw new common_1.NotFoundException('Tipoionário não encontrado');
        }
        await this.tipoModel.findOneAndUpdate({ _id }, { $set: atualizarTipoDto }).exec();
    }
    async getAllTipo() {
        return await this.tipoModel.find().exec();
    }
    async getTipoById(_id) {
        const tipoEncontrado = await this.tipoModel.findOne({ _id }).exec();
        if (!tipoEncontrado) {
            throw new Error('Tipoionário não encontrado');
        }
        return tipoEncontrado;
    }
    async deleteTipo(_id) {
        const tipoEncontrado = await this.tipoModel.findOne({ _id }).exec();
        if (!tipoEncontrado) {
            throw new Error('Tipoionário não encontrado');
        }
        return await this.tipoModel.deleteOne({ _id }).exec();
    }
};
TipoService = TipoService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Tipo')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TipoService);
exports.TipoService = TipoService;
//# sourceMappingURL=tipos.service.js.map