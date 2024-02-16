import { Model } from 'mongoose';
import { AtualizarCidadeDto } from './dtos/atualizar-cidade.dto';
import { CriarCidadeDto } from './dtos/criar-cidade.dto';
import { Cidade } from './interfaces/cidade.interface';
export declare class CidadeService {
    private readonly cidadeModel;
    private readonly logger;
    constructor(cidadeModel: Model<Cidade>);
    createCidade(criarCidadeDto: CriarCidadeDto): Promise<Cidade>;
    updateCidade(_id: string, atualizarCidadeDto: AtualizarCidadeDto): Promise<void>;
    getAllCidade(): Promise<Cidade[]>;
    getCidadeById(_id: string): Promise<Cidade>;
    deleteCidade(_id: string): Promise<any>;
}
