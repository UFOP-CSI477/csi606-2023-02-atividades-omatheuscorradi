import { IsString } from "class-validator";
import { Estado } from "../../estados/interfaces/estado.interface";

export class AtualizarTipoDto{
    
    @IsString()
    tipo: string;

    @IsString()
    fator: Estado;
    
}