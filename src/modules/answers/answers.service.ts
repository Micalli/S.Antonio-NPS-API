import { Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { AnswersRepository } from 'src/shared/database/repositories/answers.repository';
import { ValidateQuestionIfExistsService } from '../questions/services/validate-question-if-exists.service';

@Injectable()
export class AnswersService {
  constructor(
    private readonly answersRepository: AnswersRepository,
    private readonly validateQuestionIfExistsService: ValidateQuestionIfExistsService,
  ) {}

  async create(createQuestionDto: CreateAnswerDto) {
    const { answer, questionId } = createQuestionDto;

    await this.validateQuestionIfExistsService.validate(questionId);

    return await this.answersRepository.create({
      data: { answer, questionId },
    });
  }

  async findAll(questionId: string) {
    return this.answersRepository.findMany({
      where: {
        questionId,
      },
    });
  }

  update(answerId: string, updateAnswerDto: UpdateAnswerDto) {
    const { answer } = updateAnswerDto;

    return this.answersRepository.update({
      where: {
        id: answerId,
      },
      data: { answer },
    });
  }

  async remove(answerId: string) {
    await this.answersRepository.delete({
      where: { id: answerId },
    });

    return null;
  }
}
