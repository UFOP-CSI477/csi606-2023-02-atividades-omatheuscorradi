import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EstadosController } from './estados.controller';
import { EstadoService } from './estados.service';
import { EstadoSchema } from './interfaces/estado.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Estado', schema: EstadoSchema }])],
  controllers: [EstadosController],
  providers: [EstadoService]
})
export class EstadosModule {}
