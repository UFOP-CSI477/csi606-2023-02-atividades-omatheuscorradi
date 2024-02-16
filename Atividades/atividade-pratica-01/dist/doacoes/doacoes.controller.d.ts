import { AtualizarDoacaoDto } from './dtos/atualizar-doacao.dto';
import { CriarDoacaoDto } from './dtos/criar-doacao.dto';
import { DoacaoService } from './doacoes.service';
import { Doacao } from './interfaces/doacao.interface';
export declare class DoacoesController {
    private readonly doacao;
    constructor(doacao: DoacaoService);
    createDoacao(criardoacaoDto: CriarDoacaoDto): Promise<Doacao>;
    updateDoacao(atualizardoacaoDto: AtualizarDoacaoDto, _id: string): Promise<void>;
    getAllDoacao(): Promise<Doacao[]>;
    getOneDoacao(_id: string): Promise<Doacao>;
    deleteDoacao(_id: string): Promise<void>;
}
