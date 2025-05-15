import { useState, useRef, useEffect } from 'react';
import cs from './CustomSelect.module.css';

const CustomSelect = ({ options, placeholder, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const wrapperRef = useRef(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleOptionClick = (option) => {
    setSelected(option);
    toggleDropdown();
    if (onChange) onChange(option);
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
      className={cs.customSelect} ref={wrapperRef} role="combobox"  tabIndex={0}  aria-haspopup="listbox"  aria-expanded={isOpen} aria-controls="CustomSelectListBox"  aria-label="Language select" onClick={toggleDropdown}>
      <div className={cs.selectedOption}>{selected || placeholder}</div>
      {isOpen && (
        <ul className={cs.selectOptions} role="listbox" id="CustomSelectListBox">
          {options.map((option) => (
            <li key={option} className={cs.selectOption} role="option" aria-selected={option === placeholder} onClick={(e) => { e.stopPropagation(); handleOptionClick(option)}}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
