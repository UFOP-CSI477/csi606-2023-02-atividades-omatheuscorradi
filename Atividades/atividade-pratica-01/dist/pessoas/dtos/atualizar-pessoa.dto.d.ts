import { Cidade } from "src/cidades/interfaces/cidade.interface";
import { Tipo } from "src/tipos/interfaces/tipo.interface";
export declare class AtualizarPessoaDto {
    nome: string;
    rua: string;
    numero: string;
    complemento: string;
    rg: string;
    cidade_id: Cidade;
    tipo_id: Tipo;
}
