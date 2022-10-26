import { Module } from '@nestjs/common';
import { QuotesModule } from './quotes/quotes.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [QuotesModule],
  providers: [PrismaService],
})
export class AppModule {}
