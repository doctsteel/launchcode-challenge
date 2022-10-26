import { IsOptional } from 'class-validator';
import { ContactInfo, TransportMethod } from '../quotes.model';

export class GetQuotesFilterSearchDTO {
  @IsOptional()
  departure_loc?: string;

  @IsOptional()
  destination_loc?: string;

  @IsOptional()
  transportation?: TransportMethod;

  @IsOptional()
  contact_info?: ContactInfo;
}
