import { IsNotEmpty, IsString } from "class-validator";

export class CriarEstadoDto{
    
    @IsNotEmpty() @IsString()
    nome: string;

    @IsNotEmpty() @IsString()
    sigla: string;

}