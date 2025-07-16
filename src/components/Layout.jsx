const Layout = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen bg-gray-50 flex items-center justify-center p-4 ${className}`}>
      {children}
    </div>
  )
}

export default Layout
