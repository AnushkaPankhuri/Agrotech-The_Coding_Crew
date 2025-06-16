import React, { forwardRef, useEffect } from 'react';

const TextareaInput = forwardRef(({
  label,
  name,
  placeholder,
  error,
  helperText,
  className = '',
  fullWidth = true,
  required = false,
  rows = 4,
  ...props
}, ref) => {

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .textarea-container {
        margin-bottom: 1rem;
        width: 100%;
      }

      .textarea-label {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: #374151; /* gray-700 */
      }

      .textarea-required {
        color: #dc2626;
        margin-left: 0.25rem;
      }

      .textarea-field {
        width: 100%;
        padding: 0.5rem 1rem;
        border: 1px solid #d1d5db;
        border-radius: 0.5rem;
        font-size: 1rem;
        resize: vertical;
        font-family: inherit;
      }

      .textarea-field:focus {
        outline: none;
        border-color: #00743f;
        box-shadow: 0 0 0 2px rgba(0, 116, 63, 0.4);
      }

      .textarea-field.error {
        border-color: #dc2626;
      }

      .textarea-field.error:focus {
        box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.4);
      }

      .textarea-error {
        margin-top: 0.25rem;
        font-size: 0.875rem;
        color: #dc2626;
      }

      .textarea-helper {
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

  const textareaClassNames = [
    'textarea-field',
    error ? 'error' : '',
    className
  ].join(' ');

  return (
    <div className="textarea-container">
      {label && (
        <label htmlFor={name} className="textarea-label">
          {label}
          {required && <span className="textarea-required">*</span>}
        </label>
      )}

      <textarea
        ref={ref}
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        className={textareaClassNames}
        aria-invalid={error ? 'true' : 'false'}
        {...props}
      />

      {error && (
        <p className="textarea-error">{error}</p>
      )}

      {helperText && !error && (
        <p className="textarea-helper">{helperText}</p>
      )}
    </div>
  );
});

export default TextareaInput;
