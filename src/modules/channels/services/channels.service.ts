import { Injectable } from '@nestjs/common';
import { ChannelsRepository } from 'src/shared/database/repositories/channels.repository';
import { CreateChannelDto } from '../dto/create-channel.dto';
import { UpdateChannelDto } from '../dto/update-channel.dto';

@Injectable()
export class ChannelsService {
  constructor(private readonly channelsRepository: ChannelsRepository) {}

  create(createChannelDto: CreateChannelDto) {
    const { channel } = createChannelDto;

    return this.channelsRepository.create({
      data: { channel },
    });
  }

  async findAll() {
    return this.channelsRepository.findMany({
      include: {
        Questions: true,
      },
    });
  }

  async update(channelId: string, updateChannelDto: UpdateChannelDto) {
    const { channel } = updateChannelDto;

    return this.channelsRepository.update({
      where: { id: channelId },
      data: {
        channel,
      },
    });
  }

  async remove(channelId: string) {
    await this.channelsRepository.delete({
      where: { id: channelId },
    });

    return null;
  }
}
