import { Controller, Post, Body, Get, Delete, UsePipes, ValidationPipe, Param, Put } from '@nestjs/common';
import { AtualizarCidadeDto } from './dtos/atualizar-cidade.dto';
import { CriarCidadeDto } from './dtos/criar-cidade.dto';
import { CidadeService } from './cidades.service';
import { Cidade } from './interfaces/cidade.interface';
import { CidadeValidationParamsPipe } from './pipes/cidade.validation.params.pipe';

@Controller('/api/cidades')

export class CidadesController {

    constructor(private readonly cidade : CidadeService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async createCidade(@Body() criarcidadeDto: CriarCidadeDto): Promise<Cidade>{
        return await this.cidade.createCidade(criarcidadeDto);
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async updateCidade( 
        @Body() atualizarcidadeDto: AtualizarCidadeDto, 
        @Param('_id', CidadeValidationParamsPipe) _id: string): Promise<void> {
        
        await this.cidade.updateCidade(_id, atualizarcidadeDto);
    }

    @Get()          
    async getAllCidade(): Promise<Cidade[]> {
        return await this.cidade.getAllCidade();
    }

    @Get('/:_id')          
    async getOneCidade(@Param('_id', CidadeValidationParamsPipe) _id: string): Promise<Cidade> {
        return await this.cidade.getCidadeById(_id);
    }

    @Delete('/:_id')
    async deleteCidade(@Param('_id', CidadeValidationParamsPipe) _id: string): Promise<void> {
        await this.cidade.deleteCidade(_id);
    }

}
