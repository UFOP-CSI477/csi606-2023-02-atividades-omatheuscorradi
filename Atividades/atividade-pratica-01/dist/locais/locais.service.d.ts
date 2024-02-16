import { Model } from 'mongoose';
import { AtualizarLocalDto } from './dtos/atualizar-local.dto';
import { CriarLocalDto } from './dtos/criar-local.dto';
import { Local } from './interfaces/local.interface';
export declare class LocalService {
    private readonly localModel;
    private readonly logger;
    constructor(localModel: Model<Local>);
    createLocal(criarLocalDto: CriarLocalDto): Promise<Local>;
    updateLocal(_id: string, atualizarLocalDto: AtualizarLocalDto): Promise<void>;
    getAllLocal(): Promise<Local[]>;
    getLocalById(_id: string): Promise<Local>;
    deleteLocal(_id: string): Promise<any>;
}
