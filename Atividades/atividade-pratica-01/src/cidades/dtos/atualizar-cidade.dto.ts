import { IsString } from "class-validator";
import { Estado } from "../../estados/interfaces/estado.interface";

export class AtualizarCidadeDto{
    
    @IsString()
    nome: string;
    estado_id: Estado;
    
}