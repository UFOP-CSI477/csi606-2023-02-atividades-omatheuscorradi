import { IsDateString, IsEmail, IsNumber, IsString } from "class-validator";
import { Cidade } from "src/cidades/interfaces/cidade.interface";

export class AtualizarLocalDto{
    
    @IsString()
    nome: string;

    @IsString()
    rua: string;
    
    @IsString()
    numero: string;

    @IsString()
    complemento: string;

    cidade_id: Cidade;

}