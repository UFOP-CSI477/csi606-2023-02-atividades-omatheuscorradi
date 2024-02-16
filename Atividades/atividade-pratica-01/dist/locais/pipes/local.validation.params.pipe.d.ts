import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class LocalValidationParamsPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
