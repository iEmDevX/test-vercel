import { useState } from 'react'
import { useNavigate } from 'react-router'
import { 
  Layout, 
  Card, 
  Input, 
  Button, 
  SocialLoginButton, 
  GoogleIcon, 
  FacebookIcon,
  Datepicker
} from '../components'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [birthdate, setBirthdate] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Log form data including birthdate
    console.log('Login data:', {
      email,
      password,
      birthdate: birthdate ? birthdate.toLocaleDateString() : null
    })
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      navigate('/home')
    }, 1000)
  }

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`)
    // Implement social login logic here
  }

  return (
    <Layout>
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-web-green-500 via-web-green-600 to-web-green-700 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <Input
              id="email"
              type="email"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
            />

            {/* Password Field */}
            <Input
              id="password"
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />

            {/* Birthdate Field */}
            <div className="space-y-2">
              <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <Datepicker
                placeholder="Select your birthdate"
                value={birthdate}
                onChange={setBirthdate}
              />
              {birthdate && (
                <p className="text-xs text-gray-500">
                  Selected: {birthdate.toLocaleDateString()}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 accent-web-green-500"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="text-sm text-web-green-600 hover:underline focus:outline-none"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              isLoading={isLoading}
              className="w-full"
            >
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="mt-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">Or continue with</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <SocialLoginButton
              provider="Google"
              icon={<GoogleIcon />}
              onClick={() => handleSocialLogin('Google')}
            />
            <SocialLoginButton
              provider="Facebook"
              icon={<FacebookIcon />}
              onClick={() => handleSocialLogin('Facebook')}
            />
          </div>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button
                type="button"
                className="font-medium text-web-green-600 hover:underline focus:outline-none"
              >
                Sign up
              </button>
            </p>
          </div>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            By signing in, you agree to our{' '}
            <span className="text-web-green-600 hover:underline cursor-pointer">
              Terms of Service
            </span>{' '}
            and{' '}
            <span className="text-web-green-600 hover:underline cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default LoginPage
