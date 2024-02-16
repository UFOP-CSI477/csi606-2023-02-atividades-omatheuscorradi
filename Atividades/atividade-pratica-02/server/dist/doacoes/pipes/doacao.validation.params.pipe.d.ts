import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class DoacaoValidationParamsPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
