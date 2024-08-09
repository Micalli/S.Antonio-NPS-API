import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class QuestionsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.QuestionCreateArgs) {
    return this.prismaService.question.create(createDto);
  }

  findMany(findManyDto: Prisma.QuestionFindManyArgs) {
    return this.prismaService.question.findMany(findManyDto);
  }
  findFirst(findFirstDto: Prisma.QuestionFindFirstArgs) {
    return this.prismaService.question.findFirst(findFirstDto);
  }

  update(updateDto: Prisma.QuestionUpdateArgs) {
    return this.prismaService.question.update(updateDto);
  }

  delete(deleteDto: Prisma.QuestionDeleteArgs) {
    return this.prismaService.question.delete(deleteDto);
  }
}
