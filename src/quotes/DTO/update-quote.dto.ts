import { IsEnum } from 'class-validator';
import { ContactInfo, TransportMethod } from '../quotes.model';

export class UpdateQuoteDTO {
  departure_loc?: string;
  destination_loc?: string;
  departure_date?: Date;
  return_date?: Date;
  traveler_qty?: number;

  @IsEnum(TransportMethod)
  transportation?: TransportMethod;
  contact_info?: ContactInfo;
}
