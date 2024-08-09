import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersController } from './answers.controller';
import { ValidateQuestionIfExistsService } from '../questions/services/validate-question-if-exists.service';

@Module({
  controllers: [AnswersController],
  providers: [AnswersService, ValidateQuestionIfExistsService],
})
export class AnswersModule {}
