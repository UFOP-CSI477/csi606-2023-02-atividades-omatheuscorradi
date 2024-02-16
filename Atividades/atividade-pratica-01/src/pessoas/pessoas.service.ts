import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AtualizarPessoaDto } from './dtos/atualizar-pessoa.dto';
import { CriarPessoaDto } from './dtos/criar-pessoa.dto';
import { Pessoa } from './interfaces/pessoa.interface';


@Injectable()
export class PessoaService {

private readonly logger = new Logger(PessoaService.name);
constructor (@InjectModel('Pessoa') private readonly pessoaModel: Model<Pessoa>) {}


    async createPessoa(criarPessoaDto: CriarPessoaDto): Promise<Pessoa> {
        
        const pessoaCriado = await new this.pessoaModel(criarPessoaDto);
        return pessoaCriado.save();

    }

    async updatePessoa(_id: string, atualizarPessoaDto: AtualizarPessoaDto): Promise<void> {

        const pessoaEncontrado = await this.pessoaModel.findOne({ _id }).exec();
        
        if(!pessoaEncontrado) {
            throw new NotFoundException('Pessoaionário não encontrado');
        } 
        await this.pessoaModel.findOneAndUpdate({ _id }, { $set: atualizarPessoaDto }).exec();
    }

    async getAllPessoa(): Promise<Pessoa[]> {
        return await this.pessoaModel.find().exec();
    }
    
    async getPessoaById(_id: string): Promise<Pessoa> {
        const pessoaEncontrado = await this.pessoaModel.findOne({ _id }).exec();
        if(!pessoaEncontrado){
            throw new Error('Pessoaionário não encontrado');
        }
        return pessoaEncontrado;
    }

    async deletePessoa(_id: string): Promise<any> {

        const pessoaEncontrado = await this.pessoaModel.findOne({ _id }).exec();
        if(!pessoaEncontrado){
            throw new Error('Pessoaionário não encontrado');
        }
        return await this.pessoaModel.deleteOne({ _id }).exec();  
    }

}
