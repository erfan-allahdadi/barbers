export interface ServiceResponse {
  results: Service[];
}

export interface Service {
  icon: string | null;
  slug: string;
  title: string;
}
