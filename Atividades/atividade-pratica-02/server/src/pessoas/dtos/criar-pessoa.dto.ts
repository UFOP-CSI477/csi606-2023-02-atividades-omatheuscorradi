import { IsNotEmpty, IsString } from "class-validator";
import { Cidade } from "src/cidades/interfaces/cidade.interface";
import { Tipo } from "src/tipos/interfaces/tipo.interface";

export class CriarPessoaDto{
    
    @IsNotEmpty() @IsString()
    nome: string;

    @IsString() @IsNotEmpty()
    rua: string;

    @IsString() @IsNotEmpty()
    numero: string;

    @IsString() @IsNotEmpty()
    complemento: string;

    @IsString() @IsNotEmpty()
    rg: string;

    @IsNotEmpty()
    cidade_id: Cidade;

    @IsNotEmpty()
    tipo_id: Tipo;

}