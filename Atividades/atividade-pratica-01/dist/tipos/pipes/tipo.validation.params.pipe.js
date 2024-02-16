"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoValidationParamsPipe = void 0;
const common_1 = require("@nestjs/common");
class TipoValidationParamsPipe {
    transform(value, metadata) {
        if (!value) {
            throw new common_1.BadRequestException(`O parâmetro ${metadata.data} é obrigatório`);
        }
        return value;
    }
}
exports.TipoValidationParamsPipe = TipoValidationParamsPipe;
//# sourceMappingURL=tipo.validation.params.pipe.js.map