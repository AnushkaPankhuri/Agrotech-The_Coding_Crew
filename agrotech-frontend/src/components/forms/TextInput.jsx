import React, { forwardRef, useEffect } from 'react';

const TextInput = forwardRef(({
  label,
  name,
  type = 'text',
  placeholder,
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
      .textinput-container {
        margin-bottom: 1rem;
        width: 100%;
      }

      .textinput-label {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: #374151; /* gray-700 */
      }

      .textinput-required {
        color: #dc2626;
        margin-left: 0.25rem;
      }

      .textinput-field {
        width: 100%;
        padding: 0.5rem 1rem;
        border: 1px solid #d1d5db;
        border-radius: 0.5rem;
        font-size: 1rem;
        font-family: inherit;
      }

      .textinput-field:focus {
        outline: none;
        border-color: #00743f;
        box-shadow: 0 0 0 2px rgba(0, 116, 63, 0.4); /* primary ring */
      }

      .textinput-field.error {
        border-color: #dc2626;
      }

      .textinput-field.error:focus {
        box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.4); /* error ring */
      }

      .textinput-error {
        margin-top: 0.25rem;
        font-size: 0.875rem;
        color: #dc2626;
      }

      .textinput-helper {
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

  const inputClassNames = [
    'textinput-field',
    error ? 'error' : '',
    className
  ].join(' ');

  return (
    <div className="textinput-container">
      {label && (
        <label htmlFor={name} className="textinput-label">
          {label}
          {required && <span className="textinput-required">*</span>}
        </label>
      )}

      <input
        ref={ref}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={inputClassNames}
        aria-invalid={error ? 'true' : 'false'}
        {...props}
      />

      {error && (
        <p className="textinput-error">{error}</p>
      )}

      {helperText && !error && (
        <p className="textinput-helper">{helperText}</p>
      )}
    </div>
  );
});

export default TextInput;
