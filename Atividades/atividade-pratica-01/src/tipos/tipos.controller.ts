import { Controller, Post, Body, Get, Delete, UsePipes, ValidationPipe, Param, Put } from '@nestjs/common';
import { AtualizarTipoDto } from './dtos/atualizar-tipo.dto';
import { CriarTipoDto } from './dtos/criar-tipo.dto';
import { TipoService } from './tipos.service';
import { Tipo } from './interfaces/tipo.interface';
import { TipoValidationParamsPipe } from './pipes/tipo.validation.params.pipe';

@Controller('/api/tipos')

export class TiposController {

    constructor(private readonly tipo : TipoService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async createTipo(@Body() criartipoDto: CriarTipoDto): Promise<Tipo>{
        return await this.tipo.createTipo(criartipoDto);
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async updateTipo( 
        @Body() atualizartipoDto: AtualizarTipoDto, 
        @Param('_id', TipoValidationParamsPipe) _id: string): Promise<void> {
        
        await this.tipo.updateTipo(_id, atualizartipoDto);
    }

    @Get()          
    async getAllTipo(): Promise<Tipo[]> {
        return await this.tipo.getAllTipo();
    }

    @Get('/:_id')          
    async getOneTipo(@Param('_id', TipoValidationParamsPipe) _id: string): Promise<Tipo> {
        return await this.tipo.getTipoById(_id);
    }

    @Delete('/:_id')
    async deleteTipo(@Param('_id', TipoValidationParamsPipe) _id: string): Promise<void> {
        await this.tipo.deleteTipo(_id);
    }

}
