import { Module } from '@nestjs/common';
import { TipService } from './services/tip.service';
import { TipController } from './tip.controller';

@Module({
  controllers: [TipController],
  providers: [TipService],
})
export class TipModule {}
