import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { QuestionsService } from './services/questions.service';
import { RateQuestionDto } from './dto/rate-question.dto';

import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Perguntas')
@Controller('perguntas')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  @ApiResponse({ status: 404, description: 'ID do canal passado não existe.' })
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionsService.create(createQuestionDto);
  }

  @Get(':channelId')
  findAll(@Param('channelId') channelId: string) {
    return this.questionsService.findAll(channelId);
  }

  @Put(':questionId')
  update(
    @Param('questionId') questionId: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionsService.update(questionId, updateQuestionDto);
  }
  @Put('avaliar/:questionId')
  rateQuestion(
    @Param('questionId') questionId: string,
    @Body() rateQuestionDto: RateQuestionDto,
  ) {
    return this.questionsService.rateQuestion(questionId, rateQuestionDto);
  }

  @Delete(':questionId')
  remove(@Param('questionId') questionId: string) {
    return this.questionsService.remove(questionId);
  }
}
