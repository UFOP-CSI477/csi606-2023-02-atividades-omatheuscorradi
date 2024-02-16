import { Document } from 'mongoose';
export interface Estado extends Document {
    nome: string;
    sigla: string;
}
