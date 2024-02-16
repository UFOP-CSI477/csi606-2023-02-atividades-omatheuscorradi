import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AtualizarDoacaoDto } from './dtos/atualizar-doacao.dto';
import { CriarDoacaoDto } from './dtos/criar-doacao.dto';
import { Doacao } from './interfaces/doacao.interface';


@Injectable()
export class DoacaoService {

private readonly logger = new Logger(DoacaoService.name);
constructor (@InjectModel('Doacao') private readonly doacaoModel: Model<Doacao>) {}


    async createDoacao(criarDoacaoDto: CriarDoacaoDto): Promise<Doacao> {
        
        const doacaoCriado = await new this.doacaoModel(criarDoacaoDto);
        return doacaoCriado.save();

    }

    async updateDoacao(_id: string, atualizarDoacaoDto: AtualizarDoacaoDto): Promise<void> {

        const doacaoEncontrado = await this.doacaoModel.findOne({ _id }).exec();
        
        if(!doacaoEncontrado) {
            throw new NotFoundException('Doacaoionário não encontrado');
        } 
        await this.doacaoModel.findOneAndUpdate({ _id }, { $set: atualizarDoacaoDto }).exec();
    }

    async getAllDoacao(): Promise<Doacao[]> {
        return await this.doacaoModel.find().exec();
    }
    
    async getDoacaoById(_id: string): Promise<Doacao> {
        const doacaoEncontrado = await this.doacaoModel.findOne({ _id }).exec();
        if(!doacaoEncontrado){
            throw new Error('Doacaoionário não encontrado');
        }
        return doacaoEncontrado;
    }

    async deleteDoacao(_id: string): Promise<any> {

        const doacaoEncontrado = await this.doacaoModel.findOne({ _id }).exec();
        if(!doacaoEncontrado){
            throw new Error('Doacaoionário não encontrado');
        }
        return await this.doacaoModel.deleteOne({ _id }).exec();  
    }

}
