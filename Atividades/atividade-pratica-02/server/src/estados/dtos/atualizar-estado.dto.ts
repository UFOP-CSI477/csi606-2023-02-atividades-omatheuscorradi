import { IsDateString, IsEmail, IsNumber, IsString } from "class-validator";

export class AtualizarEstadoDto{
    
    @IsString()
    nome: string;

    @IsString()
    sigla: string;

}