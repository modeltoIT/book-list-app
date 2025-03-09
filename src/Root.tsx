import App from './App.tsx';
import { StrictMode } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/Dashboard.tsx';
import { BookForm } from './pages/BookForm';
import { BooksProvider } from "./context/BooksContext.tsx";

export const Root = () => {
  return (
    <StrictMode>
        <Router>
          <BooksProvider>
            <Routes>
              <Route path='/' element={<App />}>
                <Route index element={<Dashboard />}/>
                <Route path='/add-book' element={<BookForm />} />
                <Route path='/edit-book/:id' element={<BookForm />} />
              </Route>
            </Routes>
          </BooksProvider>
        </Router>
    </StrictMode>
  );
};