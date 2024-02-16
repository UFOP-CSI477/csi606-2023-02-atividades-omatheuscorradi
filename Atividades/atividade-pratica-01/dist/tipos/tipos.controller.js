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
exports.TiposController = void 0;
const common_1 = require("@nestjs/common");
const atualizar_tipo_dto_1 = require("./dtos/atualizar-tipo.dto");
const criar_tipo_dto_1 = require("./dtos/criar-tipo.dto");
const tipos_service_1 = require("./tipos.service");
const tipo_validation_params_pipe_1 = require("./pipes/tipo.validation.params.pipe");
let TiposController = class TiposController {
    constructor(tipo) {
        this.tipo = tipo;
    }
    async createTipo(criartipoDto) {
        return await this.tipo.createTipo(criartipoDto);
    }
    async updateTipo(atualizartipoDto, _id) {
        await this.tipo.updateTipo(_id, atualizartipoDto);
    }
    async getAllTipo() {
        return await this.tipo.getAllTipo();
    }
    async getOneTipo(_id) {
        return await this.tipo.getTipoById(_id);
    }
    async deleteTipo(_id) {
        await this.tipo.deleteTipo(_id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_tipo_dto_1.CriarTipoDto]),
    __metadata("design:returntype", Promise)
], TiposController.prototype, "createTipo", null);
__decorate([
    (0, common_1.Put)('/:_id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('_id', tipo_validation_params_pipe_1.TipoValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [atualizar_tipo_dto_1.AtualizarTipoDto, String]),
    __metadata("design:returntype", Promise)
], TiposController.prototype, "updateTipo", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TiposController.prototype, "getAllTipo", null);
__decorate([
    (0, common_1.Get)('/:_id'),
    __param(0, (0, common_1.Param)('_id', tipo_validation_params_pipe_1.TipoValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TiposController.prototype, "getOneTipo", null);
__decorate([
    (0, common_1.Delete)('/:_id'),
    __param(0, (0, common_1.Param)('_id', tipo_validation_params_pipe_1.TipoValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TiposController.prototype, "deleteTipo", null);
TiposController = __decorate([
    (0, common_1.Controller)('/api/tipos'),
    __metadata("design:paramtypes", [tipos_service_1.TipoService])
], TiposController);
exports.TiposController = TiposController;
//# sourceMappingURL=tipos.controller.js.map