export interface Event {
  _id: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  location: string;
  date: string;
  price: number;
  image: string;
  organizer: string;
  featured: boolean;
  createdBy: string;
  createdAt?: string;
}