import React from 'react';

function Card({ 
  children, 
  title, 
  subtitle,
  footer,
  className = '',
  noPadding = false,
  hoverEffect = false,
  ...props 
}) {
  const cardClasses = [
    'bg-white rounded-lg shadow-md overflow-hidden',
    hoverEffect ? 'transition-shadow duration-300 hover:shadow-lg' : '',
    className
  ].join(' ');
  
  return (
    <div className={cardClasses} {...props}>
      {title && (
        <div className="px-6 py-4 border-b">
          <h3 className="font-medium text-lg text-gray-900">{title}</h3>
          {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
        </div>
      )}
      
      <div className={noPadding ? '' : 'p-6'}>
        {children}
      </div>
      
      {footer && (
        <div className="px-6 py-4 bg-gray-50 border-t">
          {footer}
        </div>
      )}
    </div>
  );
}

export default Card;