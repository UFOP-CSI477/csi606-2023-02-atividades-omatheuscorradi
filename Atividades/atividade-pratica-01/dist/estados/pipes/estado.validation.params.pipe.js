"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadoValidationParamsPipe = void 0;
const common_1 = require("@nestjs/common");
class EstadoValidationParamsPipe {
    transform(value, metadata) {
        if (!value) {
            throw new common_1.BadRequestException(`O parâmetro ${metadata.data} é obrigatório`);
        }
        return value;
    }
}
exports.EstadoValidationParamsPipe = EstadoValidationParamsPipe;
//# sourceMappingURL=estado.validation.params.pipe.js.map