import { Status } from './status.enum.ts';

export interface Book {
  id: string;
  title: string;
  author: string;
  status: keyof typeof Status;
  category: string;
  createdAt: string;
  modifiedAt: string;
  isbn: string;
}