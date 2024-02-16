import { Model } from 'mongoose';
import { AtualizarPessoaDto } from './dtos/atualizar-pessoa.dto';
import { CriarPessoaDto } from './dtos/criar-pessoa.dto';
import { Pessoa } from './interfaces/pessoa.interface';
export declare class PessoaService {
    private readonly pessoaModel;
    private readonly logger;
    constructor(pessoaModel: Model<Pessoa>);
    createPessoa(criarPessoaDto: CriarPessoaDto): Promise<Pessoa>;
    updatePessoa(_id: string, atualizarPessoaDto: AtualizarPessoaDto): Promise<void>;
    getAllPessoa(): Promise<Pessoa[]>;
    getPessoaById(_id: string): Promise<Pessoa>;
    deletePessoa(_id: string): Promise<any>;
}
