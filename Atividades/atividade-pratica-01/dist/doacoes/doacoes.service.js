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
var DoacaoService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoacaoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let DoacaoService = DoacaoService_1 = class DoacaoService {
    constructor(doacaoModel) {
        this.doacaoModel = doacaoModel;
        this.logger = new common_1.Logger(DoacaoService_1.name);
    }
    async createDoacao(criarDoacaoDto) {
        const doacaoCriado = await new this.doacaoModel(criarDoacaoDto);
        return doacaoCriado.save();
    }
    async updateDoacao(_id, atualizarDoacaoDto) {
        const doacaoEncontrado = await this.doacaoModel.findOne({ _id }).exec();
        if (!doacaoEncontrado) {
            throw new common_1.NotFoundException('Doacaoionário não encontrado');
        }
        await this.doacaoModel.findOneAndUpdate({ _id }, { $set: atualizarDoacaoDto }).exec();
    }
    async getAllDoacao() {
        return await this.doacaoModel.find().exec();
    }
    async getDoacaoById(_id) {
        const doacaoEncontrado = await this.doacaoModel.findOne({ _id }).exec();
        if (!doacaoEncontrado) {
            throw new Error('Doacaoionário não encontrado');
        }
        return doacaoEncontrado;
    }
    async deleteDoacao(_id) {
        const doacaoEncontrado = await this.doacaoModel.findOne({ _id }).exec();
        if (!doacaoEncontrado) {
            throw new Error('Doacaoionário não encontrado');
        }
        return await this.doacaoModel.deleteOne({ _id }).exec();
    }
};
DoacaoService = DoacaoService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Doacao')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DoacaoService);
exports.DoacaoService = DoacaoService;
//# sourceMappingURL=doacoes.service.js.map