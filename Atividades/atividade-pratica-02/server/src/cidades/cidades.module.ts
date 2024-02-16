import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CidadesController } from './cidades.controller';
import { CidadeService } from './cidades.service';
import { CidadeSchema } from './interfaces/cidade.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cidade', schema: CidadeSchema }])],
  controllers: [CidadesController],
  providers: [CidadeService]
})
export class CidadesModule {}
