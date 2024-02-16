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
var PessoaService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PessoaService = PessoaService_1 = class PessoaService {
    constructor(pessoaModel) {
        this.pessoaModel = pessoaModel;
        this.logger = new common_1.Logger(PessoaService_1.name);
    }
    async createPessoa(criarPessoaDto) {
        const pessoaCriado = await new this.pessoaModel(criarPessoaDto);
        return pessoaCriado.save();
    }
    async updatePessoa(_id, atualizarPessoaDto) {
        const pessoaEncontrado = await this.pessoaModel.findOne({ _id }).exec();
        if (!pessoaEncontrado) {
            throw new common_1.NotFoundException('Pessoaionário não encontrado');
        }
        await this.pessoaModel.findOneAndUpdate({ _id }, { $set: atualizarPessoaDto }).exec();
    }
    async getAllPessoa() {
        return await this.pessoaModel.find().exec();
    }
    async getPessoaById(_id) {
        const pessoaEncontrado = await this.pessoaModel.findOne({ _id }).exec();
        if (!pessoaEncontrado) {
            throw new Error('Pessoaionário não encontrado');
        }
        return pessoaEncontrado;
    }
    async deletePessoa(_id) {
        const pessoaEncontrado = await this.pessoaModel.findOne({ _id }).exec();
        if (!pessoaEncontrado) {
            throw new Error('Pessoaionário não encontrado');
        }
        return await this.pessoaModel.deleteOne({ _id }).exec();
    }
};
PessoaService = PessoaService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Pessoa')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PessoaService);
exports.PessoaService = PessoaService;
//# sourceMappingURL=pessoas.service.js.map