import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TiposController } from './tipos.controller';
import { TipoService } from './tipos.service';
import { TipoSchema } from './interfaces/tipo.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Tipo', schema: TipoSchema }])],
  controllers: [TiposController],
  providers: [TipoService]
})
export class TiposModule {}
