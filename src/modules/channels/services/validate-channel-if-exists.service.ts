import { Injectable, NotFoundException } from '@nestjs/common';
import { ChannelsRepository } from 'src/shared/database/repositories/channels.repository';

@Injectable()
export class ValidateChannelIfExistsService {
  constructor(private readonly channelsRepository: ChannelsRepository) {}

  async validate(channelId: string) {
    try {
      await this.channelsRepository.findFirst({
        where: {
          id: channelId,
        },
      });
    } catch (error) {
      throw new NotFoundException('Canal não encotrada.');
    }
  }
}
