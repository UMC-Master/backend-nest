import { Controller } from '@nestjs/common';
import { TipService } from './tip.service';

@Controller('tip')
export class TipController {
  constructor(private readonly tipService: TipService) {}
}
