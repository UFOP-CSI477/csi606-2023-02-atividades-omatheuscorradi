import { Model } from 'mongoose';
import { AtualizarDoacaoDto } from './dtos/atualizar-doacao.dto';
import { CriarDoacaoDto } from './dtos/criar-doacao.dto';
import { Doacao } from './interfaces/doacao.interface';
export declare class DoacaoService {
    private readonly doacaoModel;
    private readonly logger;
    constructor(doacaoModel: Model<Doacao>);
    createDoacao(criarDoacaoDto: CriarDoacaoDto): Promise<Doacao>;
    updateDoacao(_id: string, atualizarDoacaoDto: AtualizarDoacaoDto): Promise<void>;
    getAllDoacao(): Promise<Doacao[]>;
    getDoacaoById(_id: string): Promise<Doacao>;
    deleteDoacao(_id: string): Promise<any>;
}
