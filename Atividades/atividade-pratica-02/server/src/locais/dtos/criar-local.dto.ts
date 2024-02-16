import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Cidade } from "src/cidades/interfaces/cidade.interface";

export class CriarLocalDto{
    
    @IsNotEmpty() @IsString()
    readonly nome: string;

    @IsNotEmpty() @IsString()
    rua: string;
    
    @IsNotEmpty() @IsString()
    numero: string;

    @IsNotEmpty() @IsString()
    complemento: string;

    @IsNotEmpty() 
    cidade_id: Cidade;
    
}