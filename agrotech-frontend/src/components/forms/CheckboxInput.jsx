import React, { forwardRef } from 'react';

const CheckboxInput = forwardRef(({
  label,
  name,
  error,
  helperText,
  className = '',
  ...props
}, ref) => {
  return (
    <div className="flex items-start mb-4">
      <div className="flex items-center h-5">
        <input
          ref={ref}
          type="checkbox"
          id={name}
          name={name}
          className={`h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary ${className}`}
          {...props}
        />
      </div>
      <div className="ml-3 text-sm">
        {label && (
          <label htmlFor={name} className="font-medium text-gray-700">
            {label}
          </label>
        )}
        
        {error && (
          <p className="text-error">
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p className="text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    </div>
  );
});

export default CheckboxInput;