import { Controller, Post, Body, Get, Delete, UsePipes, ValidationPipe, Param, Put } from '@nestjs/common';
import { AtualizarDoacaoDto } from './dtos/atualizar-doacao.dto';
import { CriarDoacaoDto } from './dtos/criar-doacao.dto';
import { DoacaoService } from './doacoes.service';
import { Doacao } from './interfaces/doacao.interface';
import { DoacaoValidationParamsPipe } from './pipes/doacao.validation.params.pipe';

@Controller('/api/doacoes')

export class DoacoesController {

    constructor(private readonly doacao : DoacaoService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async createDoacao(@Body() criardoacaoDto: CriarDoacaoDto): Promise<Doacao>{
        return await this.doacao.createDoacao(criardoacaoDto);
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async updateDoacao( 
        @Body() atualizardoacaoDto: AtualizarDoacaoDto, 
        @Param('_id', DoacaoValidationParamsPipe) _id: string): Promise<void> {
        
        await this.doacao.updateDoacao(_id, atualizardoacaoDto);
    }

    @Get()          
    async getAllDoacao(): Promise<Doacao[]> {
        return await this.doacao.getAllDoacao();
    }

    @Get('/:_id')          
    async getOneDoacao(@Param('_id', DoacaoValidationParamsPipe) _id: string): Promise<Doacao> {
        return await this.doacao.getDoacaoById(_id);
    }

    @Delete('/:_id')
    async deleteDoacao(@Param('_id', DoacaoValidationParamsPipe) _id: string): Promise<void> {
        await this.doacao.deleteDoacao(_id);
    }

}
