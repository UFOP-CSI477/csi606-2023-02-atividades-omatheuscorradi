import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AtualizarEstadoDto } from './dtos/atualizar-estado.dto';
import { CriarEstadoDto } from './dtos/criar-estado.dto';
import { Estado } from './interfaces/estado.interface';


@Injectable()
export class EstadoService {

private readonly logger = new Logger(EstadoService.name);
constructor (@InjectModel('Estado') private readonly estadoModel: Model<Estado>) {}


    async createEstado(criarEstadoDto: CriarEstadoDto): Promise<Estado> {
        
        const estadoCriado = await new this.estadoModel(criarEstadoDto);
        return estadoCriado.save();

    }

    async updateEstado(_id: string, atualizarEstadoDto: AtualizarEstadoDto): Promise<void> {

        const estadoEncontrado = await this.estadoModel.findOne({ _id }).exec();
        
        if(!estadoEncontrado) {
            throw new NotFoundException('Estadoionário não encontrado');
        } 
        await this.estadoModel.findOneAndUpdate({ _id }, { $set: atualizarEstadoDto }).exec();
    }

    async getAllEstado(): Promise<Estado[]> {
        return await this.estadoModel.find().exec();
    }
    
    async getEstadoById(_id: string): Promise<Estado> {
        const estadoEncontrado = await this.estadoModel.findOne({ _id }).exec();
        if(!estadoEncontrado){
            throw new Error('Estadoionário não encontrado');
        }
        return estadoEncontrado;
    }

    async deleteEstado(_id: string): Promise<any> {

        const estadoEncontrado = await this.estadoModel.findOne({ _id }).exec();
        if(!estadoEncontrado){
            throw new Error('Estadoionário não encontrado');
        }
        return await this.estadoModel.deleteOne({ _id }).exec();  
    }

}
