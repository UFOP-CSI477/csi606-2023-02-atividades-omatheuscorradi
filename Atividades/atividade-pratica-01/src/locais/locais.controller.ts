import { Controller, Post, Body, Get, Delete, UsePipes, ValidationPipe, Param, Put } from '@nestjs/common';
import { AtualizarLocalDto } from './dtos/atualizar-local.dto';
import { CriarLocalDto } from './dtos/criar-local.dto';
import { LocalService } from './locais.service';
import { Local } from './interfaces/local.interface';
import { LocalValidationParamsPipe } from './pipes/local.validation.params.pipe';

@Controller('/api/locais')

export class LocaisController {

    constructor(private readonly local : LocalService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async createLocal(@Body() criarlocalDto: CriarLocalDto): Promise<Local>{
        return await this.local.createLocal(criarlocalDto);
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async updateLocal( 
        @Body() atualizarlocalDto: AtualizarLocalDto, 
        @Param('_id', LocalValidationParamsPipe) _id: string): Promise<void> {
        
        await this.local.updateLocal(_id, atualizarlocalDto);
    }

    @Get()          
    async getAllLocal(): Promise<Local[]> {
        return await this.local.getAllLocal();
    }

    @Get('/:_id')          
    async getOneLocal(@Param('_id', LocalValidationParamsPipe) _id: string): Promise<Local> {
        return await this.local.getLocalById(_id);
    }

    @Delete('/:_id')
    async deleteLocal(@Param('_id', LocalValidationParamsPipe) _id: string): Promise<void> {
        await this.local.deleteLocal(_id);
    }

}
