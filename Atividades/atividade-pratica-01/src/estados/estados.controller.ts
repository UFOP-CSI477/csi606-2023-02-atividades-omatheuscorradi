import { Controller, Post, Body, Get, Delete, UsePipes, ValidationPipe, Param, Put } from '@nestjs/common';
import { AtualizarEstadoDto } from './dtos/atualizar-estado.dto';
import { CriarEstadoDto } from './dtos/criar-estado.dto';
import { EstadoService } from './estados.service';
import { Estado } from './interfaces/estado.interface';
import { EstadoValidationParamsPipe } from './pipes/estado.validation.params.pipe';

@Controller('/api/estados')

export class EstadosController {

    constructor(private readonly estado : EstadoService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async createEstado(@Body() criarestadoDto: CriarEstadoDto): Promise<Estado>{
        return await this.estado.createEstado(criarestadoDto);
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async updateEstado( 
        @Body() atualizarestadoDto: AtualizarEstadoDto, 
        @Param('_id', EstadoValidationParamsPipe) _id: string): Promise<void> {
        
        await this.estado.updateEstado(_id, atualizarestadoDto);
    }

    @Get()          
    async getAllEstado(): Promise<Estado[]> {
        return await this.estado.getAllEstado();
    }

    @Get('/:_id')          
    async getOneEstado(@Param('_id', EstadoValidationParamsPipe) _id: string): Promise<Estado> {
        return await this.estado.getEstadoById(_id);
    }

    @Delete('/:_id')
    async deleteEstado(@Param('_id', EstadoValidationParamsPipe) _id: string): Promise<void> {
        await this.estado.deleteEstado(_id);
    }

}
