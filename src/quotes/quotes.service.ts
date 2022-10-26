import { Injectable } from '@nestjs/common';
import { Quote, User } from '@prisma/client';
import { CreateQuoteDTO } from './DTO/create-quote.dto';
import { UpdateQuoteDTO } from './DTO/update-quote.dto';
import { PrismaService } from '../prisma/prisma.service';
import { QuotePaginationDTO } from './DTO/quote-pagination.dto';

@Injectable()
export class QuotesService {
  constructor(private prisma: PrismaService) {}

  async getAllQuotes(pagination: QuotePaginationDTO): Promise<Quote[]> {
    const { skip, take } = pagination;
    return this.prisma.quote.findMany({ skip, take });
  }

  async createQuote(data: CreateQuoteDTO, user: User): Promise<Quote> {
    return this.prisma.quote.create({ data: { ...data, userId: user.id } });
  }

  async getQuoteById(id: string): Promise<Quote | null> {
    return this.prisma.quote.findUnique({ where: { id } });
  }

  async deleteQuoteById(id: string): Promise<Quote> {
    return this.prisma.quote.delete({ where: { id } });
  }

  async updateQuote(id: string, data: UpdateQuoteDTO): Promise<Quote> {
    return this.prisma.quote.update({
      data,
      where: { id },
    });
  }

  // async filterQuotesList(filter: Prisma.QuoteFindManyArgs): Promise<Quote[]> {
  //   return this.prisma.findMany()
  //   const quote_list = this.quotes.filter((quote) => {
  //     // eslint-disable-next-line prefer-const
  //     for (let key in filter) {
  //       if (quote[key] === undefined || !filter[key].includes(quote[key])) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   });
  //   return quote_list;
  //}
}
