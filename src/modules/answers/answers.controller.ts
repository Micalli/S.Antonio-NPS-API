import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AnswersService } from './answers.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Respostas')
@Controller('respostas')
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @Post()
  @ApiResponse({
    status: 404,
    description: 'ID da resposta passada não existe',
  })
  create(@Body() createAnswerDto: CreateAnswerDto) {
    return this.answersService.create(createAnswerDto);
  }

  @Get(':questionId')
  findAll(@Param('questionId') questionId: string) {
    return this.answersService.findAll(questionId);
  }

  @Put(':questionId')
  update(
    @Param('questionId') questionId: string,
    @Body() updateAnswerDto: UpdateAnswerDto,
  ) {
    return this.answersService.update(questionId, updateAnswerDto);
  }

  @Delete(':questionId')
  remove(@Param('questionId') questionId: string) {
    return this.answersService.remove(questionId);
  }
}
