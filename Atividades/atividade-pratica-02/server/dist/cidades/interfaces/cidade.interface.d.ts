import { Document } from 'mongoose';
import { Estado } from 'src/estados/interfaces/estado.interface';
export interface Cidade extends Document {
    nome: string;
    estado_id: Estado;
}
