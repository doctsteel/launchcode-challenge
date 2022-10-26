import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { Quote, User } from '@prisma/client';
import { GetUser } from '../auth/get-user.decorator';
import { CreateQuoteDTO } from './DTO/create-quote.dto';
import { GetQuotesFilterSearchDTO } from './DTO/get-quotes-filter-search.dto';
import { QuotePaginationDTO } from './DTO/quote-pagination.dto';
import { UpdateQuoteDTO } from './DTO/update-quote.dto';

import { QuotesService } from './quotes.service';

@Controller('quotes')
@UseGuards(AuthGuard())
export class QuotesController {
  private logger = new Logger('QuotesController');
  constructor(private quotesService: QuotesService) {}

  @Get()
  async getAllQuotes(@Body() pageInfo: QuotePaginationDTO): Promise<Quote[]> {
    return this.quotesService.getAllQuotes(pageInfo);
  }

  @Get('/:id')
  async getQuoteById(@Param('id') id: string): Promise<Quote> {
    return await this.quotesService.getQuoteById(id);
  }

  @Post()
  async createQuote(
    @Body() quoteData: CreateQuoteDTO,
    @GetUser() user: User,
  ): Promise<Quote> {
    return await this.quotesService.createQuote(quoteData, user);
  }

  @Delete('/:id')
  deleteQuoteById(@Param('id') id: string): void {
    this.quotesService.deleteQuoteById(id);
  }

  @Patch('/:id')
  updateQuoteById(
    @Param('id') id: string,
    @Body() quoteData: UpdateQuoteDTO,
  ): Promise<Quote> {
    return this.quotesService.updateQuote(id, quoteData);
  }

  //@Get()
  //getQuoteListWithFilter(@Body() filter: GetQuotesFilterSearchDTO): Quote[] {
  //  return this.quotesService.filterQuotesList(filter);
  //}
}
