import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class CidadeValidationParamsPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
