import { forwardRef } from 'react'

const Input = forwardRef(({
  label,
  error,
  className = '',
  id,
  ...props
}, ref) => {
  const inputClasses = `w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-2 focus:border-web-green-500 transition-colors ${error ? 'border-red-500' : ''} ${className}`
  
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={inputClasses}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
