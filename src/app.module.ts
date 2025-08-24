import { Module } from '@nestjs/common';
import { AdminModule } from './modules/admin/admin.module';
import { ChatbotModule } from './modules/chatbot/chatbot.module';
import { PolicyModule } from './modules/policy/policy.module';
import { QuizModule } from './modules/quiz/quiz.module';
import { TipModule } from './modules/tip/tip.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    AdminModule,
    ChatbotModule,
    TipModule,
    UserModule,
    QuizModule,
    PolicyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
