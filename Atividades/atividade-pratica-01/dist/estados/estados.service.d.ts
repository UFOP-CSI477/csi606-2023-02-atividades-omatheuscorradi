import { Model } from 'mongoose';
import { AtualizarEstadoDto } from './dtos/atualizar-estado.dto';
import { CriarEstadoDto } from './dtos/criar-estado.dto';
import { Estado } from './interfaces/estado.interface';
export declare class EstadoService {
    private readonly estadoModel;
    private readonly logger;
    constructor(estadoModel: Model<Estado>);
    createEstado(criarEstadoDto: CriarEstadoDto): Promise<Estado>;
    updateEstado(_id: string, atualizarEstadoDto: AtualizarEstadoDto): Promise<void>;
    getAllEstado(): Promise<Estado[]>;
    getEstadoById(_id: string): Promise<Estado>;
    deleteEstado(_id: string): Promise<any>;
}
