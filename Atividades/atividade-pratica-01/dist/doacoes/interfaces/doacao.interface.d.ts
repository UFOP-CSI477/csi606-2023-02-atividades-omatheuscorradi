import { Document } from 'mongoose';
import { Local } from 'src/locais/interfaces/local.interface';
import { Pessoa } from 'src/pessoas/interfaces/pessoa.interface';
export interface Doacao extends Document {
    pessoa_id: Pessoa;
    local_id: Local;
    data: Date;
}
