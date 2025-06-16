import React, { forwardRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const SelectInput = forwardRef(({
  label,
  name,
  options = [],
  placeholder = 'Select an option',
  error,
  helperText,
  className = '',
  fullWidth = true,
  required = false,
  ...props
}, ref) => {
  
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .select-container {
        margin-bottom: 1rem;
        width: 100%;
      }

      .select-label {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: #374151; /* gray-700 */
      }

      .select-required {
        color: #dc2626; /* red-600 */
        margin-left: 0.25rem;
      }

      .select-wrapper {
        position: relative;
      }

      .select-field {
        padding: 0.5rem 1rem;
        padding-right: 2.5rem;
        border: 1px solid #d1d5db;
        border-radius: 0.5rem;
        background: white;
        appearance: none;
        width: 100%;
        font-size: 1rem;
        color: #111827;
      }

      .select-field:focus {
        outline: none;
        border-color: #00743f;
        box-shadow: 0 0 0 2px rgba(0, 116, 63, 0.4);
      }

      .select-field.error {
        border-color: #dc2626;
      }

      .select-field.error:focus {
        box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.4);
      }

      .select-icon {
        pointer-events: none;
        position: absolute;
        right: 0.75rem;
        top: 50%;
        transform: translateY(-50%);
        color: #6b7280; /* gray-500 */
      }

      .select-error {
        margin-top: 0.25rem;
        font-size: 0.875rem;
        color: #dc2626;
      }

      .select-helper {
        margin-top: 0.25rem;
        font-size: 0.875rem;
        color: #6b7280;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const selectClassNames = [
    'select-field',
    error ? 'error' : '',
    className
  ].join(' ');

  return (
    <div className="select-container">
      {label && (
        <label htmlFor={name} className="select-label">
          {label}
          {required && <span className="select-required">*</span>}
        </label>
      )}

      <div className="select-wrapper">
        <select
          ref={ref}
          id={name}
          name={name}
          className={selectClassNames}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        <div className="select-icon">
          <ChevronDown size={16} />
        </div>
      </div>

      {error && (
        <p className="select-error">{error}</p>
      )}

      {helperText && !error && (
        <p className="select-helper">{helperText}</p>
      )}
    </div>
  );
});

export default SelectInput;
