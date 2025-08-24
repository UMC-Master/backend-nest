import { Controller } from '@nestjs/common';
import { ChatbotService } from './services/chatbot.service';

@Controller('chatbot')
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}
}
