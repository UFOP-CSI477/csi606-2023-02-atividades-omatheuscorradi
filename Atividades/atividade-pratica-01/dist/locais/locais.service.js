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
var LocalService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let LocalService = LocalService_1 = class LocalService {
    constructor(localModel) {
        this.localModel = localModel;
        this.logger = new common_1.Logger(LocalService_1.name);
    }
    async createLocal(criarLocalDto) {
        const localCriado = await new this.localModel(criarLocalDto);
        return localCriado.save();
    }
    async updateLocal(_id, atualizarLocalDto) {
        const localEncontrado = await this.localModel.findOne({ _id }).exec();
        if (!localEncontrado) {
            throw new common_1.NotFoundException('Localionário não encontrado');
        }
        await this.localModel.findOneAndUpdate({ _id }, { $set: atualizarLocalDto }).exec();
    }
    async getAllLocal() {
        return await this.localModel.find().exec();
    }
    async getLocalById(_id) {
        const localEncontrado = await this.localModel.findOne({ _id }).exec();
        if (!localEncontrado) {
            throw new Error('Localionário não encontrado');
        }
        return localEncontrado;
    }
    async deleteLocal(_id) {
        const localEncontrado = await this.localModel.findOne({ _id }).exec();
        if (!localEncontrado) {
            throw new Error('Localionário não encontrado');
        }
        return await this.localModel.deleteOne({ _id }).exec();
    }
};
LocalService = LocalService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Local')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LocalService);
exports.LocalService = LocalService;
//# sourceMappingURL=locais.service.js.map