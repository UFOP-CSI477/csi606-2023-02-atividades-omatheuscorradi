"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoacoesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const doacoes_controller_1 = require("./doacoes.controller");
const doacoes_service_1 = require("./doacoes.service");
const doacao_schema_1 = require("./interfaces/doacao.schema");
let DoacoesModule = class DoacoesModule {
};
DoacoesModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Doacao', schema: doacao_schema_1.DoacaoSchema }])],
        controllers: [doacoes_controller_1.DoacoesController],
        providers: [doacoes_service_1.DoacaoService]
    })
], DoacoesModule);
exports.DoacoesModule = DoacoesModule;
//# sourceMappingURL=doacoes.module.js.map