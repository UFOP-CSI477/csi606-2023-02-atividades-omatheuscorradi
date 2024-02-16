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
var EstadoService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let EstadoService = EstadoService_1 = class EstadoService {
    constructor(estadoModel) {
        this.estadoModel = estadoModel;
        this.logger = new common_1.Logger(EstadoService_1.name);
    }
    async createEstado(criarEstadoDto) {
        const estadoCriado = await new this.estadoModel(criarEstadoDto);
        return estadoCriado.save();
    }
    async updateEstado(_id, atualizarEstadoDto) {
        const estadoEncontrado = await this.estadoModel.findOne({ _id }).exec();
        if (!estadoEncontrado) {
            throw new common_1.NotFoundException('Estadoionário não encontrado');
        }
        await this.estadoModel.findOneAndUpdate({ _id }, { $set: atualizarEstadoDto }).exec();
    }
    async getAllEstado() {
        return await this.estadoModel.find().exec();
    }
    async getEstadoById(_id) {
        const estadoEncontrado = await this.estadoModel.findOne({ _id }).exec();
        if (!estadoEncontrado) {
            throw new Error('Estadoionário não encontrado');
        }
        return estadoEncontrado;
    }
    async deleteEstado(_id) {
        const estadoEncontrado = await this.estadoModel.findOne({ _id }).exec();
        if (!estadoEncontrado) {
            throw new Error('Estadoionário não encontrado');
        }
        return await this.estadoModel.deleteOne({ _id }).exec();
    }
};
EstadoService = EstadoService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Estado')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EstadoService);
exports.EstadoService = EstadoService;
//# sourceMappingURL=estados.service.js.map