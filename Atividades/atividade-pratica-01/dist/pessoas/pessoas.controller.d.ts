import { AtualizarPessoaDto } from './dtos/atualizar-pessoa.dto';
import { CriarPessoaDto } from './dtos/criar-pessoa.dto';
import { PessoaService } from './pessoas.service';
import { Pessoa } from './interfaces/pessoa.interface';
export declare class PessoasController {
    private readonly pessoa;
    constructor(pessoa: PessoaService);
    createPessoa(criarpessoaDto: CriarPessoaDto): Promise<Pessoa>;
    updatePessoa(atualizarpessoaDto: AtualizarPessoaDto, _id: string): Promise<void>;
    getAllPessoa(): Promise<Pessoa[]>;
    getOnePessoa(_id: string): Promise<Pessoa>;
    deletePessoa(_id: string): Promise<void>;
}
