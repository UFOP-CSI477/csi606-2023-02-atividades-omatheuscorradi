import { AtualizarEstadoDto } from './dtos/atualizar-estado.dto';
import { CriarEstadoDto } from './dtos/criar-estado.dto';
import { EstadoService } from './estados.service';
import { Estado } from './interfaces/estado.interface';
export declare class EstadosController {
    private readonly estado;
    constructor(estado: EstadoService);
    createEstado(criarestadoDto: CriarEstadoDto): Promise<Estado>;
    updateEstado(atualizarestadoDto: AtualizarEstadoDto, _id: string): Promise<void>;
    getAllEstado(): Promise<Estado[]>;
    getOneEstado(_id: string): Promise<Estado>;
    deleteEstado(_id: string): Promise<void>;
}
