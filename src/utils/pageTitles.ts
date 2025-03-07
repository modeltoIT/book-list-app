import { PageTitle } from '../types/pageTitles.enum.ts';

export const HEADER_TITLES: Record<string, PageTitle> = {
  "/": PageTitle.Dashboard,
  "/add-book": PageTitle.AddBook,
  "/edit-book": PageTitle.EditBook,
};