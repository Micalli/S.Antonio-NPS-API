import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ChannelsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ChannelCreateArgs) {
    return this.prismaService.channel.create(createDto);
  }

  findMany(findManyDto: Prisma.ChannelFindManyArgs) {
    return this.prismaService.channel.findMany(findManyDto);
  }
  findFirst(findFirstDto: Prisma.ChannelFindFirstArgs) {
    return this.prismaService.channel.findFirst(findFirstDto);
  }

  update(updateDto: Prisma.ChannelUpdateArgs) {
    return this.prismaService.channel.update(updateDto);
  }

  delete(deleteDto: Prisma.ChannelDeleteArgs) {
    return this.prismaService.channel.delete(deleteDto);
  }
}
