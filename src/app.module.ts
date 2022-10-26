import { Module } from '@nestjs/common';
import { QuotesModule } from './quotes/quotes.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [QuotesModule, AuthModule],
  providers: [PrismaService],
})
export class AppModule {}
