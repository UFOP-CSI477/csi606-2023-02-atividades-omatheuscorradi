import { AtualizarLocalDto } from './dtos/atualizar-local.dto';
import { CriarLocalDto } from './dtos/criar-local.dto';
import { LocalService } from './locais.service';
import { Local } from './interfaces/local.interface';
export declare class LocaisController {
    private readonly local;
    constructor(local: LocalService);
    createLocal(criarlocalDto: CriarLocalDto): Promise<Local>;
    updateLocal(atualizarlocalDto: AtualizarLocalDto, _id: string): Promise<void>;
    getAllLocal(): Promise<Local[]>;
    getOneLocal(_id: string): Promise<Local>;
    deleteLocal(_id: string): Promise<void>;
}
