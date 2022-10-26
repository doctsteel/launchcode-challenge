import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Quote } from '@prisma/client';
import { v4 } from 'uuid';
import { CreateQuoteDTO } from './DTO/create-quote.dto';
import { UpdateQuoteDTO } from './DTO/update-quote.dto';
import { GetQuotesFilterSearchDTO } from './DTO/get-quotes-filter-search.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuotesService {
  constructor(private prisma: PrismaService) {}

  async getAllQuotes(): Promise<Quote[]> {
    return this.prisma.quote.findMany();
  }

  async createQuote(data: Prisma.QuoteCreateInput): Promise<Quote> {
    return this.prisma.quote.create({ data });
  }

  async getQuoteById(id: Prisma.QuoteWhereUniqueInput): Promise<Quote | null> {
    return this.prisma.quote.findUnique({ where: id });
  }

  async deleteQuoteById(id: Prisma.QuoteWhereUniqueInput): Promise<Quote> {
    return this.prisma.quote.delete({ where: id });
  }

  async updateQuote(params: {
    id: Prisma.QuoteWhereUniqueInput;
    data: Prisma.QuoteUpdateInput;
  }): Promise<Quote> {
    let { id, data } = params;
    return this.prisma.quote.update({
      data,
      where: id,
    });
  }

  filterQuotesList(filter: GetQuotesFilterSearchDTO): Quote[] {
    const quote_list = this.quotes.filter((quote) => {
      // eslint-disable-next-line prefer-const
      for (let key in filter) {
        if (quote[key] === undefined || !filter[key].includes(quote[key])) {
          return false;
        }
      }
      return true;
    });
    return quote_list;
  }
}
