import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PessoasController } from './pessoas.controller';
import { PessoaService } from './pessoas.service';
import { PessoaSchema } from './interfaces/pessoa.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Pessoa', schema: PessoaSchema }])],
  controllers: [PessoasController],
  providers: [PessoaService]
})
export class PessoasModule {}
