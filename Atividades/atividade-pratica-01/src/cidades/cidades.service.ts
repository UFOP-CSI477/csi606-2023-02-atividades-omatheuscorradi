import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AtualizarCidadeDto } from './dtos/atualizar-cidade.dto';
import { CriarCidadeDto } from './dtos/criar-cidade.dto';
import { Cidade } from './interfaces/cidade.interface';


@Injectable()
export class CidadeService {

private readonly logger = new Logger(CidadeService.name);
constructor (@InjectModel('Cidade') private readonly cidadeModel: Model<Cidade>) {}


    async createCidade(criarCidadeDto: CriarCidadeDto): Promise<Cidade> {
        
        const cidadeCriado = await new this.cidadeModel(criarCidadeDto);
        return cidadeCriado.save();

    }

    async updateCidade(_id: string, atualizarCidadeDto: AtualizarCidadeDto): Promise<void> {

        const cidadeEncontrado = await this.cidadeModel.findOne({ _id }).exec();
        
        if(!cidadeEncontrado) {
            throw new NotFoundException('Cidadeionário não encontrado');
        } 
        await this.cidadeModel.findOneAndUpdate({ _id }, { $set: atualizarCidadeDto }).exec();
    }

    async getAllCidade(): Promise<Cidade[]> {
        return await this.cidadeModel.find().exec();
    }
    
    async getCidadeById(_id: string): Promise<Cidade> {
        const cidadeEncontrado = await this.cidadeModel.findOne({ _id }).exec();
        if(!cidadeEncontrado){
            throw new Error('Cidadeionário não encontrado');
        }
        return cidadeEncontrado;
    }

    async deleteCidade(_id: string): Promise<any> {

        const cidadeEncontrado = await this.cidadeModel.findOne({ _id }).exec();
        if(!cidadeEncontrado){
            throw new Error('Cidadeionário não encontrado');
        }
        return await this.cidadeModel.deleteOne({ _id }).exec();  
    }

}
