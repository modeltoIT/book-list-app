import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { HEADER_TITLES } from '../../utils/pageTitles.ts';
import { useBooksContext } from '../../hooks/useBookContext.ts';
import { Book } from '../../types/book.interface.ts';
import { Status } from '../../types/status.enum.ts';
import { Dropdown } from "./components/Dropdown";
import { FormDataInterface } from "../../types/formData.interface.ts";


export const BookForm = () => {
  const { books, addNewBook, updateTheBook } = useBooksContext();
  const { id: bookID } = useParams();
  const [book, setBook] = useState<Book>();
  const [formData, setFormData] = useState<FormDataInterface>({
    title: book?.title || '',
    author: book?.author || '',
    category: book?.category || '',
    isbn: book?.isbn || '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormDataInterface, string>>>({});
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.slice(0, location.pathname.lastIndexOf('/') || undefined);
  const formTitle = HEADER_TITLES[path];

  useEffect(() => {
    const theBook = books.find(({ id }) => id === bookID);
    setBook(theBook);
    setFormData({
      title: theBook?.title || '',
      author: theBook?.author || '',
      category: theBook?.category || '',
      isbn: theBook?.isbn || '',
    });
  }, [books, bookID]);

  const navigateToPrevious = () => {
    navigate({
      pathname: '/',
      search: `${ location.state ?? '' }`
    });
  }

  const validate = () => {
    let newErrors: Partial<Record<keyof FormDataInterface, string>> = {};
    if (!formData.title.trim()) newErrors.title = 'Book title is required';
    if (!formData.author.trim()) newErrors.author = 'Author name is required';
    if (!formData.category.trim()) newErrors.category = 'Category is required';
    if (!formData.isbn.trim()) {
      newErrors.isbn = 'ISBN is required';
    } else if (!Number.isInteger(+formData.isbn.trim())) {
      newErrors.isbn = 'ISBN should be a number';
    } else if (formData.isbn.trim().length !== 13) {
      newErrors.isbn = 'ISBN should consist of 13 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const currentTime = (new Date()).toISOString();
    if (book && bookID) {
      updateTheBook({ ...formData, status: book.status, createdAt: book.createdAt, modifiedAt: currentTime }, bookID)
    } else if (!bookID) {
      addNewBook({ ...formData, status: Status.active, modifiedAt: null, createdAt: currentTime });
    }

    navigateToPrevious();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({...errors, [e.target.name]: ''})
  };

  return (
    <div className=" max-w-lg mx-auto p-6 shadow-[0_0_12px_1px_rgba(0,0,0,0.1)] rounded-lg my-5">
      <h2 className="text-2xl font-semibold mb-4">{ formTitle }</h2>
      <form onSubmit={ handleSubmit }>
        <div className="flex flex-col sm:flex-row sm:gap-4 sm:mb-2">
          <div className="mb-2 sm:mb-0">
            <label htmlFor="title-field" className="block font-medium mb-1">Book Title</label>
            <input
              id="title-field"
              type="text"
              name="title"
              value={ formData.title }
              onChange={ handleChange }
              className="w-full p-2 border-[1.5px] rounded-md  bg-gray-50 focus:border-slate-700 opacity-70 focus:outline-none"
            />
            <p
              className={ `text-red-400 text-xs sm:text-sm mt-1 min-h-5 ${ errors.title ? '' : 'invisible' }` }
            >
              { errors.title }
            </p>
          </div>

          <div className="mb-2 sm:mb-0">
            <label htmlFor="author-field" className="block font-medium mb-1">Author Name</label>
            <input
              id='author-field'
              type="text"
              name="author"
              value={ formData.author }
              onChange={ handleChange }
              className="w-full p-2 border-[1.5px] rounded-md bg-gray-50 focus:border-slate-700 opacity-70 focus:outline-none"
            />
            <p
              className={ `text-red-400 text-xs sm:text-sm  mt-1 min-h-5 ${ errors.author ? '' : 'invisible' }` }
            >
              { errors.author }
            </p>
          </div>

        </div>

        <Dropdown errors={ errors } setErrors={setErrors} formData={formData} setFormData={setFormData}/>

        <div className="mb-4">
          <label htmlFor="isbn-field" className="block font-medium mb-1">ISBN</label>
          <input
            id="isbn-field"
            type="text"
            name="isbn"
            value={ formData.isbn }
            onChange={ handleChange }
            className="w-full p-2 border-[1.5px] rounded-md bg-gray-50 focus:border-slate-700 opacity-70 focus:outline-none"
          />
          <p
            className={ `text-red-400 text-xs sm:text-sm  mt-1 min-h-5 ${ errors.isbn ? '' : 'invisible' }` }
          >
            { errors.isbn }
          </p>
        </div>

        <button
          type="submit"
          className="w-full text-md font-bold bg-gray-900 text-white uppercase  shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  p-2 rounded-md"
        >
          { formTitle }
        </button>
      </form>
      <button onClick={ navigateToPrevious } className="mt-4 block underline">
        Back to Dashboard
      </button>
    </div>
  );
};