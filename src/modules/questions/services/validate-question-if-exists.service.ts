import { Injectable, NotFoundException } from '@nestjs/common';
import { ChannelsRepository } from 'src/shared/database/repositories/channels.repository';

@Injectable()
export class ValidateQuestionIfExistsService {
  constructor(private readonly channelsRepository: ChannelsRepository) {}

  async validate(questionId: string) {
    try {
      await this.channelsRepository.findFirst({
        where: {
          id: questionId,
        },
      });
    } catch (error) {
      throw new NotFoundException('Pergunta não encotrada.');
    }
  }
}
