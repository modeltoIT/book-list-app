import { icons } from "../../../../utils/icons.tsx";
import { FC, useRef, useState } from "react";
import { Category } from "../../../../types/category.enum.ts";
import { FormDataInterface } from "../../../../types/formData.interface.ts";
import { useClickOutside } from "../../../../hooks/useClickOutside.ts";

interface Props {
  errors: Partial<Record<keyof FormDataInterface, string>>;
  setErrors: (errors: Partial<Record<keyof FormDataInterface, string>>) => void;
  formData: FormDataInterface;
  setFormData: (data: FormDataInterface) => void;
}

export const Dropdown: FC<Props> = ({ errors, setErrors, formData, setFormData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleErrorMessage = () => {
    if (errors.category && isOpen) {
      setErrors({...errors, category: ''})
    }
  }

  const handleToggle = () => {
    setIsOpen(!isOpen);

    handleErrorMessage()
  }

  useClickOutside(dropdownRef, () => {
    setIsOpen(false)
    handleErrorMessage()
  })

  const chooseCategory = (category: string) => {
    setFormData({ ...formData, category });
    setIsOpen(false)
    handleErrorMessage()
  }

  return (
    <div ref={ dropdownRef } className='relative mb-2'>
      <label
        htmlFor='dropdown-btn'
        className="block font-medium text-secondary-300 mb-1"
      >
        Category
      </label>

      <button
        id='dropdown-btn'
        role='listbox'
        aria-expanded={ isOpen }
        type='button'
        className="relative w-full p-2 border-[1.5px] rounded-md bg-gray-50 focus:border-slate-700 opacity-70 focus:outline-none text-left"
        onClick={ handleToggle }
      >
        { formData.category || 'Select a category' }
        <div
          className={ `w-3 absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${ isOpen ? 'rotate-180' : 'rotate-0' }` }> { icons.arrowDown } </div>
      </button>

      <div className={`box-border overflow-hidden absolute top-[75px] w-full z-10 transition-[height] ease-in-out duration-300 ${ isOpen ? 'h-[255px] ' : 'h-0' }`}>
        <ul
          className={ `box-border flex flex-col py-1.5 bg-gray-50 focus:outline-none text-left rounded-md border-[1.5px]
       ` }
        >
          { Object.values(Category).map(category => (
            <li
              key={ category }
              className='flex cursor-pointer items-center p-2 hover:bg-gray-150 transition-all duration-200'
              onClick={ () => chooseCategory(category) }
            >
              { category }
            </li>
          )) }
        </ul>
      </div>

      <p
        className={ `text-red-400 text-xs sm:text-sm  mt-1 min-h-5 ${ errors.category || !isOpen ? '' : 'invisible' }` }
      >
        { errors.category }
      </p>

    </div>
  );
}