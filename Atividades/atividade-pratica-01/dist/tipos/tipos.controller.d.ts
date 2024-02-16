import { AtualizarTipoDto } from './dtos/atualizar-tipo.dto';
import { CriarTipoDto } from './dtos/criar-tipo.dto';
import { TipoService } from './tipos.service';
import { Tipo } from './interfaces/tipo.interface';
export declare class TiposController {
    private readonly tipo;
    constructor(tipo: TipoService);
    createTipo(criartipoDto: CriarTipoDto): Promise<Tipo>;
    updateTipo(atualizartipoDto: AtualizarTipoDto, _id: string): Promise<void>;
    getAllTipo(): Promise<Tipo[]>;
    getOneTipo(_id: string): Promise<Tipo>;
    deleteTipo(_id: string): Promise<void>;
}
