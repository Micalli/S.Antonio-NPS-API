import { BadRequestException, Injectable } from '@nestjs/common';
import { QuestionsRepository } from 'src/shared/database/repositories/questions.repository';
import { ValidateChannelIfExistsService } from 'src/modules/channels/services/validate-channel-if-exists.service';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { UpdateQuestionDto } from '../dto/update-question.dto';
import { RateQuestionDto } from '../dto/rate-question.dto';

@Injectable()
export class QuestionsService {
  constructor(
    private readonly questionsRepository: QuestionsRepository,
    private readonly validateChannelIfExistsService: ValidateChannelIfExistsService,
  ) {}

  async create(createQuestionDto: CreateQuestionDto) {
    const { question, channelId } = createQuestionDto;

    await this.validateChannelIfExistsService.validate(channelId);

    return await this.questionsRepository.create({
      data: { question, channelId },
    });
  }

  async findAll(channelId: string) {
    return this.questionsRepository.findMany({
      where: {
        channelId,
      },
      include: {
        Answers: true,
      },
    });
  }

  async update(questionId: string, UpdateQuestionDto: UpdateQuestionDto) {
    const { question } = UpdateQuestionDto;

    return this.questionsRepository.update({
      where: {
        id: questionId,
      },
      data: { question },
    });
  }

  async rateQuestion(questionId: string, rateQuestionDto: RateQuestionDto) {
    const { grade, note } = rateQuestionDto;

    return this.questionsRepository.update({
      where: {
        id: questionId,
      },
      data: { note: note || null, grade },
    });
  }

  async remove(questionId: string) {
    await this.questionsRepository.delete({
      where: { id: questionId },
    });

    return null;
  }
}
