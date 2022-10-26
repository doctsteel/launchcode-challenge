import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Quote } from '@prisma/client';
import { CreateQuoteDTO } from './DTO/create-quote.dto';
import { GetQuotesFilterSearchDTO } from './DTO/get-quotes-filter-search.dto';
import { UpdateQuoteDTO } from './DTO/update-quote.dto';

import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private quotesService: QuotesService) {}

  // @Get()
  // getAllQuotes(): Quote[] {
  //   return this.quotesService.getAllQuotes();
  // }

  @Get('/:id')
  async getQuoteById(@Param('id') id: string): Promise<Quote> {
    return await this.quotesService.getQuoteById(id);
  }

  @Post()
  async createQuote(@Body() quoteData: CreateQuoteDTO): Promise<Quote> {
    return await this.quotesService.createQuote(quoteData);
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
