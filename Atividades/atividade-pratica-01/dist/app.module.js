"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const estados_module_1 = require("./estados/estados.module");
const cidades_module_1 = require("./cidades/cidades.module");
const locais_module_1 = require("./locais/locais.module");
const tipos_module_1 = require("./tipos/tipos.module");
const pessoas_module_1 = require("./pessoas/pessoas.module");
const doacoes_module_1 = require("./doacoes/doacoes.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot('mongodb+srv://matheusCorradi:<LAlute-14>@sanguedoacao.o2jh7ea.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true }),
            estados_module_1.EstadosModule, cidades_module_1.CidadesModule, locais_module_1.LocaisModule, tipos_module_1.TiposModule, pessoas_module_1.PessoasModule, doacoes_module_1.DoacoesModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map