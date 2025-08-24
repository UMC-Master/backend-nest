import { Module } from '@nestjs/common';
import { QuizService } from './services/quiz.service';
import { QuizController } from './quiz.controller';

@Module({
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
