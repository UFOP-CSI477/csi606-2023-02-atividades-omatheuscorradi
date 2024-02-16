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
exports.EstadosController = void 0;
const common_1 = require("@nestjs/common");
const atualizar_estado_dto_1 = require("./dtos/atualizar-estado.dto");
const criar_estado_dto_1 = require("./dtos/criar-estado.dto");
const estados_service_1 = require("./estados.service");
const estado_validation_params_pipe_1 = require("./pipes/estado.validation.params.pipe");
let EstadosController = class EstadosController {
    constructor(estado) {
        this.estado = estado;
    }
    async createEstado(criarestadoDto) {
        return await this.estado.createEstado(criarestadoDto);
    }
    async updateEstado(atualizarestadoDto, _id) {
        await this.estado.updateEstado(_id, atualizarestadoDto);
    }
    async getAllEstado() {
        return await this.estado.getAllEstado();
    }
    async getOneEstado(_id) {
        return await this.estado.getEstadoById(_id);
    }
    async deleteEstado(_id) {
        await this.estado.deleteEstado(_id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_estado_dto_1.CriarEstadoDto]),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "createEstado", null);
__decorate([
    (0, common_1.Put)('/:_id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('_id', estado_validation_params_pipe_1.EstadoValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [atualizar_estado_dto_1.AtualizarEstadoDto, String]),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "updateEstado", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "getAllEstado", null);
__decorate([
    (0, common_1.Get)('/:_id'),
    __param(0, (0, common_1.Param)('_id', estado_validation_params_pipe_1.EstadoValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "getOneEstado", null);
__decorate([
    (0, common_1.Delete)('/:_id'),
    __param(0, (0, common_1.Param)('_id', estado_validation_params_pipe_1.EstadoValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "deleteEstado", null);
EstadosController = __decorate([
    (0, common_1.Controller)('/api/estados'),
    __metadata("design:paramtypes", [estados_service_1.EstadoService])
], EstadosController);
exports.EstadosController = EstadosController;
//# sourceMappingURL=estados.controller.js.map