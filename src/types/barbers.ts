export interface BarberResponse {
  count: number;
  next: string;
  previous: string;
  results: Barber[];
}

export interface Barber {
  id: number;
  fullname: string;
  avatar: string;
  address: string;
  rate: number;
  review_count: number;
  slug: string;
  services: string[];
}

export interface Barbers {
  results: Barber[];
}
