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
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { ChannelsService } from './services/channels.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Canais')
@Controller('canais')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @Post()
  create(@Body() createChannelDto: CreateChannelDto) {
    return this.channelsService.create(createChannelDto);
  }

  @Get()
  findAll() {
    return this.channelsService.findAll();
  }

  @Put(':channelId')
  update(
    @Param('channelId') channelId: string,
    @Body() updateChannelDto: UpdateChannelDto,
  ) {
    return this.channelsService.update(channelId, updateChannelDto);
  }

  @Delete(':channelId')
  remove(@Param('channelId') channelId: string) {
    return this.channelsService.remove(channelId);
  }
}
