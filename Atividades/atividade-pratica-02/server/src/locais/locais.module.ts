import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocalService } from './locais.service';
import { LocalSchema } from './interfaces/local.schema';
import { LocaisController } from './locais.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Local', schema: LocalSchema }])],
  controllers: [LocaisController],
  providers: [LocalService]
})
export class LocaisModule {}
