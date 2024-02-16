import { Model } from 'mongoose';
import { AtualizarTipoDto } from './dtos/atualizar-tipo.dto';
import { CriarTipoDto } from './dtos/criar-tipo.dto';
import { Tipo } from './interfaces/tipo.interface';
export declare class TipoService {
    private readonly tipoModel;
    private readonly logger;
    constructor(tipoModel: Model<Tipo>);
    createTipo(criarTipoDto: CriarTipoDto): Promise<Tipo>;
    updateTipo(_id: string, atualizarTipoDto: AtualizarTipoDto): Promise<void>;
    getAllTipo(): Promise<Tipo[]>;
    getTipoById(_id: string): Promise<Tipo>;
    deleteTipo(_id: string): Promise<any>;
}
