import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';

@Module({
  controllers: [QuotesController],
  providers: [QuotesService, PrismaService],
})
export class QuotesModule {}
