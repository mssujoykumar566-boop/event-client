export type User = {
  id?: string;
  name: string;
  email: string;
  role: "user" | "organizer" | "admin";
  createdAt?: Date;
};