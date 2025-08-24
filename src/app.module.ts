import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { ChatbotModule } from './chatbot/chatbot.module';
import { TipModule } from './tip/tip.module';
import { UserModule } from './user/user.module';
import { QuizModule } from './quiz/quiz.module';
import { PolicyModule } from './policy/policy.module';

@Module({
  imports: [AdminModule, ChatbotModule, TipModule, UserModule, QuizModule, PolicyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
