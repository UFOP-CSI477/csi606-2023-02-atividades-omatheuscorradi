import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class TipoValidationParamsPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
