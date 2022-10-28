import BaseHttpService from "./base-http.service";
import { CreateQuoteDTO } from "./DTO/create-quote.dto";
import { UpdateQuoteDTO } from "./DTO/update-quote.dto";

export default class QuotesService extends BaseHttpService {
  createQuote(data: CreateQuoteDTO) {
    return this.post(`quotes`, { ...data });
  }

  async deleteQuote(id: string) {
    await this.delete(`quotes/${id}`);
  }

  updateQuoteById(id: string, data: UpdateQuoteDTO) {
    return this.patch(`quotes/${id}`, { ...data });
  }

  getQuoteList(skip: number, take: number) {
    return this.get(`quotes`, { skip: skip, take: take });
  }

  getSingleQuote(id: string) {
    return this.get(`quotes/${id}`);
  }
}
