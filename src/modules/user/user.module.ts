import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repositories/user.repository';

@Module({
  controllers: [UserController],
  providers: [
    // Services
    UserService,

    // Repositories
    UserRepository,
  ],
})
export class UserModule {}
