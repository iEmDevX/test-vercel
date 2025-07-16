const Card = ({ children, className = '', hover = false, ...props }) => {
  const baseClasses = 'bg-white rounded-xl border border-gray-200 shadow-md'
  const hoverClasses = hover ? 'hover:shadow-lg hover:border-web-green-300 transition-all duration-300' : ''
  const cardClasses = `${baseClasses} ${hoverClasses} ${className}`
  
  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  )
}

export default Card
