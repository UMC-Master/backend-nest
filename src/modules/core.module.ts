import { Module } from '@nestjs/common';
import { ChatbotModule } from './chatbot/chatbot.module';
import { PolicyModule } from './policy/policy.module';
import { QuizModule } from './quiz/quiz.module';
import { TipModule } from './tip/tip.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ChatbotModule, TipModule, UserModule, QuizModule, PolicyModule],
})
export class CoreModule {}
