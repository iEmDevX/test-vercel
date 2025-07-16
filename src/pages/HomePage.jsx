import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Layout, Card, Button, FeatureCard, Datepicker } from '../components'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const HomePage = () => {
  const [count, setCount] = useState(0)
  const [selectedDate, setSelectedDate] = useState(null)
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
  }

  const handleDateChange = (date) => {
    setSelectedDate(date)
    console.log('Selected date:', date)
  }

  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Vite provides instant server start and lightning fast HMR'
    },
    {
      icon: '⚛️',
      title: 'React Power',
      description: 'Build interactive UIs with the power of React'
    },
    {
      icon: '🎨',
      title: 'Design System',
      description: 'Consistent design tokens for modern UI development'
    }
  ]

  const technologies = [
    { name: 'CSS Variables', color: 'bg-web-green-500' },
    { name: 'Design Tokens', color: 'bg-white text-web-green-600 border border-web-green-300' },
    { name: 'Tailwind CSS', color: 'bg-gray-800 text-white' },
    { name: 'React Router', color: 'bg-blue-500 text-white' }
  ]

  return (
    <Layout>
      <div className="max-w-4xl mx-auto text-center w-full">
        {/* Logout Button */}
        <div className="absolute top-4 right-4">
          <Button onClick={handleLogout} size="sm">
            Logout
          </Button>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer" className="group">
            <img 
              src={viteLogo} 
              className="h-20 w-20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" 
              alt="Vite logo" 
            />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="group">
            <img 
              src={reactLogo} 
              className="h-20 w-20 transition-transform duration-300 group-hover:scale-110 animate-spin-slow" 
              alt="React logo" 
            />
          </a>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-web-green-500 via-web-green-600 to-web-green-700 bg-clip-text text-transparent">
          Vite + React + Tailwind
        </h1>

        {/* Counter Card */}
        <Card className="p-8 mb-8 max-w-lg mx-auto">
          <div className="flex flex-col gap-6 items-center">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Counter</h3>
              <Button 
                onClick={() => setCount((count) => count + 1)}
                size="lg"
                className="mb-4 text-xl"
              >
                Count is {count}
              </Button>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Date Picker</h3>
              <Datepicker 
                placeholder="Select a date"
                onChange={handleDateChange}
                value={selectedDate}
              />
              {selectedDate && (
                <p className="text-sm text-gray-600 mt-2">
                  Selected: {selectedDate.toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
          <p className="text-gray-600 text-lg mt-6">
            Edit <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-web-green-600">src/App.jsx</code> and save to test HMR
          </p>
        </Card>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Info Section */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-web-green-50 to-web-green-100 border-web-green-200">
          <h2 className="text-2xl font-bold mb-4 text-web-green-800">
            🎯 Built with Design Tokens
          </h2>
          <p className="text-base mb-4 text-web-green-700">
            This application demonstrates the power of a consistent design system using CSS custom properties and Tailwind CSS.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className={`px-3 py-1 rounded-full text-sm font-medium ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </Card>

        {/* Footer */}
        <p className="text-gray-400 text-sm">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </Layout>
  )
}

export default HomePage
