import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { QuestionsRepository } from './repositories/questions.repository';
import { ChannelsRepository } from './repositories/channels.repository';
import { AnswersRepository } from './repositories/answers.repository';
@Global()
@Module({
  providers: [
    PrismaService,
    QuestionsRepository,
    ChannelsRepository,
    AnswersRepository,
  ],
  exports: [QuestionsRepository, ChannelsRepository, AnswersRepository],
})
export class DatabaseModule {}
