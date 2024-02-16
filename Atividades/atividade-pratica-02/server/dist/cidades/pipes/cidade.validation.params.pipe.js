"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CidadeValidationParamsPipe = void 0;
const common_1 = require("@nestjs/common");
class CidadeValidationParamsPipe {
    transform(value, metadata) {
        if (!value) {
            throw new common_1.BadRequestException(`O parâmetro ${metadata.data} é obrigatório`);
        }
        return value;
    }
}
exports.CidadeValidationParamsPipe = CidadeValidationParamsPipe;
//# sourceMappingURL=cidade.validation.params.pipe.js.map