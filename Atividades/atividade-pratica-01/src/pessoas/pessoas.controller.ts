import { Controller, Post, Body, Get, Delete, UsePipes, ValidationPipe, Param, Put } from '@nestjs/common';
import { AtualizarPessoaDto } from './dtos/atualizar-pessoa.dto';
import { CriarPessoaDto } from './dtos/criar-pessoa.dto';
import { PessoaService } from './pessoas.service';
import { Pessoa } from './interfaces/pessoa.interface';
import { PessoaValidationParamsPipe } from './pipes/pessoa.validation.params.pipe';

@Controller('/api/pessoas')

export class PessoasController {

    constructor(private readonly pessoa : PessoaService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async createPessoa(@Body() criarpessoaDto: CriarPessoaDto): Promise<Pessoa>{
        return await this.pessoa.createPessoa(criarpessoaDto);
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async updatePessoa( 
        @Body() atualizarpessoaDto: AtualizarPessoaDto, 
        @Param('_id', PessoaValidationParamsPipe) _id: string): Promise<void> {
        
        await this.pessoa.updatePessoa(_id, atualizarpessoaDto);
    }

    @Get()          
    async getAllPessoa(): Promise<Pessoa[]> {
        return await this.pessoa.getAllPessoa();
    }

    @Get('/:_id')          
    async getOnePessoa(@Param('_id', PessoaValidationParamsPipe) _id: string): Promise<Pessoa> {
        return await this.pessoa.getPessoaById(_id);
    }

    @Delete('/:_id')
    async deletePessoa(@Param('_id', PessoaValidationParamsPipe) _id: string): Promise<void> {
        await this.pessoa.deletePessoa(_id);
    }

}
