import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class PessoaValidationParamsPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
