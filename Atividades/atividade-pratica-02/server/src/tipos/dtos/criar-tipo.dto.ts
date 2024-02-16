import { IsNotEmpty, IsString } from "class-validator";
import { Estado } from "../../estados/interfaces/estado.interface";

export class CriarTipoDto{
    
    @IsNotEmpty() @IsString()
    tipo: string;

    @IsNotEmpty() @IsString()
    fator: Estado;

}