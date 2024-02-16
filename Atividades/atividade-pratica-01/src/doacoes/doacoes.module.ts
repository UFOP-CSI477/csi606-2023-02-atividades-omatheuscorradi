import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoacoesController } from './doacoes.controller';
import { DoacaoService } from './doacoes.service';
import { DoacaoSchema } from './interfaces/doacao.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Doacao', schema: DoacaoSchema }])],
  controllers: [DoacoesController],
  providers: [DoacaoService]
})
export class DoacoesModule {}
