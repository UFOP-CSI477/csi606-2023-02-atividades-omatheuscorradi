import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AtualizarTipoDto } from './dtos/atualizar-tipo.dto';
import { CriarTipoDto } from './dtos/criar-tipo.dto';
import { Tipo } from './interfaces/tipo.interface';


@Injectable()
export class TipoService {

private readonly logger = new Logger(TipoService.name);
constructor (@InjectModel('Tipo') private readonly tipoModel: Model<Tipo>) {}


    async createTipo(criarTipoDto: CriarTipoDto): Promise<Tipo> {
        
        const tipoCriado = await new this.tipoModel(criarTipoDto);
        return tipoCriado.save();

    }

    async updateTipo(_id: string, atualizarTipoDto: AtualizarTipoDto): Promise<void> {

        const tipoEncontrado = await this.tipoModel.findOne({ _id }).exec();
        
        if(!tipoEncontrado) {
            throw new NotFoundException('Tipoionário não encontrado');
        } 
        await this.tipoModel.findOneAndUpdate({ _id }, { $set: atualizarTipoDto }).exec();
    }

    async getAllTipo(): Promise<Tipo[]> {
        return await this.tipoModel.find().exec();
    }
    
    async getTipoById(_id: string): Promise<Tipo> {
        const tipoEncontrado = await this.tipoModel.findOne({ _id }).exec();
        if(!tipoEncontrado){
            throw new Error('Tipoionário não encontrado');
        }
        return tipoEncontrado;
    }

    async deleteTipo(_id: string): Promise<any> {

        const tipoEncontrado = await this.tipoModel.findOne({ _id }).exec();
        if(!tipoEncontrado){
            throw new Error('Tipoionário não encontrado');
        }
        return await this.tipoModel.deleteOne({ _id }).exec();  
    }

}
