import { IsNotEmpty, IsString } from "class-validator";
import { Estado } from "../../estados/interfaces/estado.interface";

export class CriarCidadeDto{
    
    @IsNotEmpty() @IsString()
    nome: string;

    @IsNotEmpty()
    estado_id: Estado;

}