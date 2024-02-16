import { Document } from 'mongoose';
import { Cidade } from 'src/cidades/interfaces/cidade.interface';

export interface Local extends Document {
    nome: string;
    rua: string;
    numero: string;
    complemento: string;
    cidade_id: Cidade;
}