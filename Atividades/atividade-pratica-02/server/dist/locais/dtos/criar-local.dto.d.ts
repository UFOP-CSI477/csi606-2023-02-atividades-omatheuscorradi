import { Cidade } from "src/cidades/interfaces/cidade.interface";
export declare class CriarLocalDto {
    readonly nome: string;
    rua: string;
    numero: string;
    complemento: string;
    cidade_id: Cidade;
}
