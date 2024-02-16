import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AtualizarLocalDto } from './dtos/atualizar-local.dto';
import { CriarLocalDto } from './dtos/criar-local.dto';
import { Local } from './interfaces/local.interface';


@Injectable()
export class LocalService {

private readonly logger = new Logger(LocalService.name);
constructor (@InjectModel('Local') private readonly localModel: Model<Local>) {}


    async createLocal(criarLocalDto: CriarLocalDto): Promise<Local> {
        
        const localCriado = await new this.localModel(criarLocalDto);
        return localCriado.save();

    }

    async updateLocal(_id: string, atualizarLocalDto: AtualizarLocalDto): Promise<void> {

        const localEncontrado = await this.localModel.findOne({ _id }).exec();
        
        if(!localEncontrado) {
            throw new NotFoundException('Localionário não encontrado');
        } 
        await this.localModel.findOneAndUpdate({ _id }, { $set: atualizarLocalDto }).exec();
    }

    async getAllLocal(): Promise<Local[]> {
        return await this.localModel.find().exec();
    }
    
    async getLocalById(_id: string): Promise<Local> {
        const localEncontrado = await this.localModel.findOne({ _id }).exec();
        if(!localEncontrado){
            throw new Error('Localionário não encontrado');
        }
        return localEncontrado;
    }

    async deleteLocal(_id: string): Promise<any> {

        const localEncontrado = await this.localModel.findOne({ _id }).exec();
        if(!localEncontrado){
            throw new Error('Localionário não encontrado');
        }
        return await this.localModel.deleteOne({ _id }).exec();  
    }

}
