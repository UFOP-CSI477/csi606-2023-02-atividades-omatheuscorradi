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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoacoesController = void 0;
const common_1 = require("@nestjs/common");
const atualizar_doacao_dto_1 = require("./dtos/atualizar-doacao.dto");
const criar_doacao_dto_1 = require("./dtos/criar-doacao.dto");
const doacoes_service_1 = require("./doacoes.service");
const doacao_validation_params_pipe_1 = require("./pipes/doacao.validation.params.pipe");
let DoacoesController = class DoacoesController {
    constructor(doacao) {
        this.doacao = doacao;
    }
    async createDoacao(criardoacaoDto) {
        return await this.doacao.createDoacao(criardoacaoDto);
    }
    async updateDoacao(atualizardoacaoDto, _id) {
        await this.doacao.updateDoacao(_id, atualizardoacaoDto);
    }
    async getAllDoacao() {
        return await this.doacao.getAllDoacao();
    }
    async getOneDoacao(_id) {
        return await this.doacao.getDoacaoById(_id);
    }
    async deleteDoacao(_id) {
        await this.doacao.deleteDoacao(_id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_doacao_dto_1.CriarDoacaoDto]),
    __metadata("design:returntype", Promise)
], DoacoesController.prototype, "createDoacao", null);
__decorate([
    (0, common_1.Put)('/:_id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('_id', doacao_validation_params_pipe_1.DoacaoValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [atualizar_doacao_dto_1.AtualizarDoacaoDto, String]),
    __metadata("design:returntype", Promise)
], DoacoesController.prototype, "updateDoacao", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DoacoesController.prototype, "getAllDoacao", null);
__decorate([
    (0, common_1.Get)('/:_id'),
    __param(0, (0, common_1.Param)('_id', doacao_validation_params_pipe_1.DoacaoValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DoacoesController.prototype, "getOneDoacao", null);
__decorate([
    (0, common_1.Delete)('/:_id'),
    __param(0, (0, common_1.Param)('_id', doacao_validation_params_pipe_1.DoacaoValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DoacoesController.prototype, "deleteDoacao", null);
DoacoesController = __decorate([
    (0, common_1.Controller)('/api/doacoes'),
    __metadata("design:paramtypes", [doacoes_service_1.DoacaoService])
], DoacoesController);
exports.DoacoesController = DoacoesController;
//# sourceMappingURL=doacoes.controller.js.map