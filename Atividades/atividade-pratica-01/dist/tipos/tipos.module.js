"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiposModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const tipos_controller_1 = require("./tipos.controller");
const tipos_service_1 = require("./tipos.service");
const tipo_schema_1 = require("./interfaces/tipo.schema");
let TiposModule = class TiposModule {
};
TiposModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Tipo', schema: tipo_schema_1.TipoSchema }])],
        controllers: [tipos_controller_1.TiposController],
        providers: [tipos_service_1.TipoService]
    })
], TiposModule);
exports.TiposModule = TiposModule;
//# sourceMappingURL=tipos.module.js.map