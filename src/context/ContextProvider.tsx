import {ReactNode} from 'react';
import {BooksProvider} from './BooksContext.tsx';

export const ContextProvider = ({children}: { children: ReactNode }) => {
  return (
    <BooksProvider>
      {children}
    </BooksProvider>
  );
};