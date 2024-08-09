import { Module } from '@nestjs/common';
import { QuestionsController } from './questions.controller';
import { ValidateChannelIfExistsService } from '../channels/services/validate-channel-if-exists.service';
import { QuestionsService } from './services/questions.service';
import { ValidateQuestionIfExistsService } from './services/validate-question-if-exists.service';

@Module({
  controllers: [QuestionsController],
  providers: [
    QuestionsService,
    ValidateChannelIfExistsService,
    ValidateQuestionIfExistsService,
  ],
  exports: [ValidateQuestionIfExistsService],
})
export class QuestionsModule {}
