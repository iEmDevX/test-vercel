import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
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
        <h1 className="text-5xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          Vite + React + Tailwind
        </h1>

        {/* Counter Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20 shadow-xl">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-xl mb-4"
          >
            Count is {count}
          </button>
          <p className="text-white/80 text-lg">
            Edit <code className="bg-black/30 px-2 py-1 rounded text-yellow-300">src/App.jsx</code> and save to test HMR
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-white font-semibold mb-2">Lightning Fast</h3>
            <p className="text-white/70 text-sm">Vite provides instant server start and lightning fast HMR</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-3">⚛️</div>
            <h3 className="text-white font-semibold mb-2">React Power</h3>
            <p className="text-white/70 text-sm">Build interactive UIs with the power of React</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-white font-semibold mb-2">Tailwind CSS</h3>
            <p className="text-white/70 text-sm">Rapidly build modern UIs with utility-first CSS</p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-white/60 text-sm">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
