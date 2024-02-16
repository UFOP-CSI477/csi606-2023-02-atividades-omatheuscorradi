import { IsDate, IsNotEmpty } from "class-validator";
import { Pessoa } from "src/pessoas/interfaces/pessoa.interface";
import { Local } from "src/locais/interfaces/local.interface";

export class CriarDoacaoDto{
    
    @IsNotEmpty() 
    pessoa_id: Pessoa;

    @IsNotEmpty() 
    local_id: Local;

    // data: Date;

}