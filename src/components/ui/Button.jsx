import { forwardRef } from 'react'

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  ...props
}, ref) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'text-white bg-web-green-500 hover:bg-web-green-600 focus:ring-web-green-500',
    secondary: 'text-web-green-600 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-web-green-500',
    outline: 'text-web-green-600 bg-transparent border border-web-green-600 hover:bg-web-green-50 focus:ring-web-green-500'
  }
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  }
  
  const variantClasses = variants[variant] || variants.primary
  const sizeClasses = sizes[size] || sizes.md
  
  const buttonClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`
  
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || isLoading}
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2"></div>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
