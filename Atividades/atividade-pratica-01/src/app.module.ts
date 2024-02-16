import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EstadosModule } from './estados/estados.module';
import { CidadesModule } from './cidades/cidades.module';
import { LocaisModule } from './locais/locais.module';
import { TiposModule } from './tipos/tipos.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { DoacoesModule } from './doacoes/doacoes.module';

@Module({
  imports:
    [MongooseModule.forRoot('mongodb+srv://matheusCorradi:<LAlute-14>@sanguedoacao.o2jh7ea.mongodb.net/',
      { useNewUrlParser: true, useUnifiedTopology: true }),
      EstadosModule, CidadesModule, LocaisModule, TiposModule, PessoasModule, DoacoesModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule { }
