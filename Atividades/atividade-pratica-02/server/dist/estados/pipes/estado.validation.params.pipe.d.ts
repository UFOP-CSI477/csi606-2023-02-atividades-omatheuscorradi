import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class EstadoValidationParamsPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
