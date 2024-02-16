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
exports.LocaisController = void 0;
const common_1 = require("@nestjs/common");
const atualizar_local_dto_1 = require("./dtos/atualizar-local.dto");
const criar_local_dto_1 = require("./dtos/criar-local.dto");
const locais_service_1 = require("./locais.service");
const local_validation_params_pipe_1 = require("./pipes/local.validation.params.pipe");
let LocaisController = class LocaisController {
    constructor(local) {
        this.local = local;
    }
    async createLocal(criarlocalDto) {
        return await this.local.createLocal(criarlocalDto);
    }
    async updateLocal(atualizarlocalDto, _id) {
        await this.local.updateLocal(_id, atualizarlocalDto);
    }
    async getAllLocal() {
        return await this.local.getAllLocal();
    }
    async getOneLocal(_id) {
        return await this.local.getLocalById(_id);
    }
    async deleteLocal(_id) {
        await this.local.deleteLocal(_id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_local_dto_1.CriarLocalDto]),
    __metadata("design:returntype", Promise)
], LocaisController.prototype, "createLocal", null);
__decorate([
    (0, common_1.Put)('/:_id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('_id', local_validation_params_pipe_1.LocalValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [atualizar_local_dto_1.AtualizarLocalDto, String]),
    __metadata("design:returntype", Promise)
], LocaisController.prototype, "updateLocal", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocaisController.prototype, "getAllLocal", null);
__decorate([
    (0, common_1.Get)('/:_id'),
    __param(0, (0, common_1.Param)('_id', local_validation_params_pipe_1.LocalValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocaisController.prototype, "getOneLocal", null);
__decorate([
    (0, common_1.Delete)('/:_id'),
    __param(0, (0, common_1.Param)('_id', local_validation_params_pipe_1.LocalValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocaisController.prototype, "deleteLocal", null);
LocaisController = __decorate([
    (0, common_1.Controller)('/api/locais'),
    __metadata("design:paramtypes", [locais_service_1.LocalService])
], LocaisController);
exports.LocaisController = LocaisController;
//# sourceMappingURL=locais.controller.js.map