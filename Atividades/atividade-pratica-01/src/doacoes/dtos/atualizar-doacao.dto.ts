import { Pessoa } from "src/pessoas/interfaces/pessoa.interface";
import { Local } from "src/locais/interfaces/local.interface";
import { IsDate, IsNotEmpty } from "class-validator";

export class AtualizarDoacaoDto{
    
    @IsNotEmpty()
    pessoa_id: Pessoa;

    @IsNotEmpty()
    local_id: Local;
    
}