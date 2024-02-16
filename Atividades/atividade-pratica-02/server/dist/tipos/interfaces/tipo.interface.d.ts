import { Document } from 'mongoose';
export interface Tipo extends Document {
    tipo: string;
    fator: string;
}
