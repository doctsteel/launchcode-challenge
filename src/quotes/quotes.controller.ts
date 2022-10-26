import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateQuoteDTO } from './DTO/create-quote.dto';
import { GetQuotesFilterSearchDTO } from './DTO/get-quotes-filter-search.dto';
import { UpdateQuoteDTO } from './DTO/update-quote.dto';
import { Quote } from './quotes.model';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private quotesService: QuotesService) {}

  @Get()
  getAllQuotes(): Quote[] {
    return this.quotesService.getAllQuotes();
  }

  @Get('/:id')
  getQuoteById(@Param('id') id: string): Quote {
    return this.quotesService.getQuoteById(id);
  }

  @Post()
  createQuote(@Body() createQuoteDto: CreateQuoteDTO): Quote {
    return this.quotesService.createQuote(createQuoteDto);
  }

  @Delete('/:id')
  deleteQuoteById(@Param('id') id: string): void {
    this.quotesService.deleteQuoteById(id);
  }

  @Patch('/:id')
  updateQuoteById(
    @Param('id') id: string,
    @Body() updateQuoteDto: UpdateQuoteDTO,
  ): Quote {
    return this.quotesService.updateQuoteById(id, updateQuoteDto);
  }

  @Get()
  getQuoteListWithFilter(@Body() filter: GetQuotesFilterSearchDTO): Quote[] {
    return this.quotesService.filterQuotesList(filter);
  }
}
