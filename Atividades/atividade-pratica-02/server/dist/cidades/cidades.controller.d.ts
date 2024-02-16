import { AtualizarCidadeDto } from './dtos/atualizar-cidade.dto';
import { CriarCidadeDto } from './dtos/criar-cidade.dto';
import { CidadeService } from './cidades.service';
import { Cidade } from './interfaces/cidade.interface';
export declare class CidadesController {
    private readonly cidade;
    constructor(cidade: CidadeService);
    createCidade(criarcidadeDto: CriarCidadeDto): Promise<Cidade>;
    updateCidade(atualizarcidadeDto: AtualizarCidadeDto, _id: string): Promise<void>;
    getAllCidade(): Promise<Cidade[]>;
    getOneCidade(_id: string): Promise<Cidade>;
    deleteCidade(_id: string): Promise<void>;
}
