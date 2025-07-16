import { useState } from 'react'
import { useNavigate } from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Home() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const handleLogout = () => {
    // Navigate back to login
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logout Button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={handleLogout}
            className="text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: 'var(--color-web-green-500)',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-web-green-600)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--color-web-green-500)'}
          >
            Logout
          </button>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <a href="https://vite.dev" target="_blank" className="group">
            <img 
              src={viteLogo} 
              className="h-20 w-20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" 
              alt="Vite logo" 
            />
          </a>
          <a href="https://react.dev" target="_blank" className="group">
            <img 
              src={reactLogo} 
              className="h-20 w-20 transition-transform duration-300 group-hover:scale-110 animate-spin-slow" 
              alt="React logo" 
            />
          </a>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-900 mb-8" style={{
          backgroundImage: 'linear-gradient(to right, var(--color-web-green-500), var(--color-web-green-600), var(--color-web-green-700))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Vite + React + Tailwind
        </h1>

        {/* Counter Card */}
        <div className="bg-white rounded-xl p-8 mb-8 border border-gray-200 shadow-md">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow text-xl mb-4"
            style={{
              backgroundColor: 'var(--color-web-green-500)',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-web-green-600)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--color-web-green-500)'}
          >
            Count is {count}
          </button>
          <p className="text-gray-600 text-lg">
            Edit <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono" style={{ color: 'var(--color-web-green-600)' }}>src/App.jsx</code> and save to test HMR
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300 hover:border-opacity-50" 
               style={{ '--hover-border-color': 'var(--color-web-green-300)' }}
               onMouseEnter={(e) => e.target.style.borderColor = 'var(--color-web-green-300)'}
               onMouseLeave={(e) => e.target.style.borderColor = 'rgb(229, 231, 235)'}>
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-gray-800 font-semibold mb-2 text-lg">Lightning Fast</h3>
            <p className="text-gray-500 text-sm">Vite provides instant server start and lightning fast HMR</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
               onMouseEnter={(e) => e.target.style.borderColor = 'var(--color-web-green-300)'}
               onMouseLeave={(e) => e.target.style.borderColor = 'rgb(229, 231, 235)'}>
            <div className="text-3xl mb-3">⚛️</div>
            <h3 className="text-gray-800 font-semibold mb-2 text-lg">React Power</h3>
            <p className="text-gray-500 text-sm">Build interactive UIs with the power of React</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
               onMouseEnter={(e) => e.target.style.borderColor = 'var(--color-web-green-300)'}
               onMouseLeave={(e) => e.target.style.borderColor = 'rgb(229, 231, 235)'}>
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-gray-800 font-semibold mb-2 text-lg">Design System</h3>
            <p className="text-gray-500 text-sm">Consistent design tokens for modern UI development</p>
          </div>
        </div>

        {/* Info Section */}
        <div className="rounded-xl p-6 mb-8 border" 
             style={{
               background: 'linear-gradient(to right, var(--color-web-green-50), var(--color-web-green-100))',
               borderColor: 'var(--color-web-green-200)'
             }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-web-green-800)' }}>
            🎯 Built with Design Tokens
          </h2>
          <p className="text-base mb-4" style={{ color: 'var(--color-web-green-700)' }}>
            This application demonstrates the power of a consistent design system using CSS custom properties and Tailwind CSS.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-white px-3 py-1 rounded-full text-sm font-medium" 
                  style={{ backgroundColor: 'var(--color-web-green-500)' }}>
              CSS Variables
            </span>
            <span className="bg-white px-3 py-1 rounded-full text-sm font-medium border" 
                  style={{ 
                    color: 'var(--color-web-green-600)',
                    borderColor: 'var(--color-web-green-300)'
                  }}>
              Design Tokens
            </span>
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
              Tailwind CSS
            </span>
            <span className="text-white px-3 py-1 rounded-full text-sm font-medium" 
                  style={{ backgroundColor: 'var(--color-info)' }}>
              React Router
            </span>
          </div>
        </div>

        {/* Footer */}
        <p className="text-gray-400 text-sm">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default Home
