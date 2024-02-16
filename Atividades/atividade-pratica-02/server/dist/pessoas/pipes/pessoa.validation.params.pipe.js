"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaValidationParamsPipe = void 0;
const common_1 = require("@nestjs/common");
class PessoaValidationParamsPipe {
    transform(value, metadata) {
        if (!value) {
            throw new common_1.BadRequestException(`O parâmetro ${metadata.data} é obrigatório`);
        }
        return value;
    }
}
exports.PessoaValidationParamsPipe = PessoaValidationParamsPipe;
//# sourceMappingURL=pessoa.validation.params.pipe.js.map