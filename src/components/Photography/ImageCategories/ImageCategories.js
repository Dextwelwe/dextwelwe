import { useState, useRef, useEffect } from 'react';
import ic from './ImageCategories.module.css';
import dropdown from '../../../assets/images/dropdown.png'


export default function ImageCategories({ options, onChange }) {
 const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0].title);
  const wrapperRef = useRef(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleOptionClick = (option) => {
    setSelected(option.title);
    toggleDropdown();
    onChange(option.index);
  };

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={ic.customSelect} ref={wrapperRef} role="combobox"  tabIndex={0}  aria-haspopup="listbox"  aria-expanded={isOpen} aria-controls="CustomSelectListBox"  aria-label="Photography Category Select" onClick={toggleDropdown}>
      <div className={ic.selectedOptionWrapper}>
            <div className={ic.selectedOption}>
                {selected}
                <img className={ic.dropdownIcon} alt='dropdown icon' src={dropdown}/>
            </div>
                </div>
      {isOpen && (
        <ul className={ic.selectOptions} role="listbox" id="CustomSelectListBox">
          {options.map((option) => (
            <li key={option.index} className={ic.selectOption} role="option"  onClick={(e) => { e.stopPropagation(); handleOptionClick(option)}}>
              {option.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
