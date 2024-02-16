"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoacaoValidationParamsPipe = void 0;
const common_1 = require("@nestjs/common");
class DoacaoValidationParamsPipe {
    transform(value, metadata) {
        if (!value) {
            throw new common_1.BadRequestException(`O parâmetro ${metadata.data} é obrigatório`);
        }
        return value;
    }
}
exports.DoacaoValidationParamsPipe = DoacaoValidationParamsPipe;
//# sourceMappingURL=doacao.validation.params.pipe.js.map