import { IsString } from "class-validator";
import { Estado } from "../../estados/interfaces/estado.interface";
import { Cidade } from "src/cidades/interfaces/cidade.interface";
import { Tipo } from "src/tipos/interfaces/tipo.interface";

export class AtualizarPessoaDto{
    
    @IsString()
    nome: string;

    @IsString()
    rua: string;

    @IsString()
    numero: string;

    @IsString()
    complemento: string;

    @IsString()
    rg: string;

    cidade_id: Cidade;
    tipo_id: Tipo;
    
}