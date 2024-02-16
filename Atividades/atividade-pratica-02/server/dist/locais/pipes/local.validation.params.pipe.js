"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalValidationParamsPipe = void 0;
const common_1 = require("@nestjs/common");
class LocalValidationParamsPipe {
    transform(value, metadata) {
        if (!value) {
            throw new common_1.BadRequestException(`O parâmetro ${metadata.data} é obrigatório`);
        }
        return value;
    }
}
exports.LocalValidationParamsPipe = LocalValidationParamsPipe;
//# sourceMappingURL=local.validation.params.pipe.js.map