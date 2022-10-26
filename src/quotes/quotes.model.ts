export interface Quote {
  id: string;
  departure_loc: string;
  destination_loc: string;
  departure_date: Date;
  return_date: Date;
  traveler_qty: number;
  transportation: TransportMethod;
  contact_info: ContactInfo;
}

export enum TransportMethod {
  CAR = 'car',
  PLANE = 'plane',
  ON_FOOT = 'on_foot',
  MISC = 'misc',
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: number;
}
