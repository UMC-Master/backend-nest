import { Controller } from '@nestjs/common';
import { PolicyService } from './services/policy.service';

@Controller('policy')
export class PolicyController {
  constructor(private readonly policyService: PolicyService) {}
}
