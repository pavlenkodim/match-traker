import { useState, useRef, useEffect } from "react";
import cn from "../../utils/cn";
import DropDownArrowDown from "../icons/DropDownArrowDown";

interface DropDownProps {
  options: { value: string; label: string; disabled?: boolean }[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const DropDown = ({
  options,
  value,
  onChange,
  placeholder = "Выберите...",
  className = "",
  disabled = false,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Закрываем дропдаун при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Обновляем внутреннее состояние при изменении внешнего значения
  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    if (onChange) {
      onChange(optionValue);
    }
  };

  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  return (
    <div
      ref={dropdownRef}
      className={cn(
        "relative w-full",
        className,
        disabled ? "opacity-60 cursor-not-allowed" : ""
      )}
    >
      <div
        className={cn(
          "h-[56px] min-w-[170px] flex justify-between items-center text-white-secondary px-4 py-3 bg-dark-secondary rounded-sm cursor-pointer border",
          !disabled ? "hover:bg-dark-additional hover:text-white" : "",
          isOpen ? "border-dark-additional" : "border-transparent"
        )}
        onClick={toggleDropdown}
      >
        <span
          className={selectedOption ? "text-white" : "text-white-secondary"}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <div
          className={cn(
            "transition-transform",
            !isOpen ? "rotate-0" : "rotate-180"
          )}
        >
          <DropDownArrowDown />
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-[8px] bg-dark-additional rounded-sm shadow-lg z-10 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option.value}
              className={
                !option.disabled
                  ? cn(
                      "px-4 py-2 h-[48px] flex items-center hover:bg-dark-active hover:text-white cursor-pointer",
                      option.value === selectedValue && !option.disabled
                        ? "bg-dark-secondary-active text-white"
                        : "text-white-secondary"
                    )
                  : cn(
                      "px-4 py-2 h-[48px] flex items-center bg-dark-secondary-disabled text-white-disabled-secondary cursor-not-allowed"
                    )
              }
              onClick={() => !option.disabled && handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
