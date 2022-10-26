import { IsNotEmpty } from 'class-validator';
import { ContactInfo, TransportMethod } from '../quotes.model';

export class CreateQuoteDTO {
  @IsNotEmpty()
  departure_loc: string;

  @IsNotEmpty()
  destination_loc: string;

  @IsNotEmpty()
  departure_date: Date;

  @IsNotEmpty()
  return_date: Date;

  @IsNotEmpty()
  traveler_qty: number;

  @IsNotEmpty()
  transportation: TransportMethod;

  @IsNotEmpty()
  contact_info: ContactInfo;
}
