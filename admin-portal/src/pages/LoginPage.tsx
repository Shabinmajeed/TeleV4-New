import { useState, FormEvent } from 'react'
import logo from '@/assets/logo.png'
import healiPeak from '@/assets/Heali-peak.png'
import './LoginPage.css'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }
    if (!password.trim()) {
      setError('Please enter your password.')
      return
    }

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setIsLoading(false)

    // For now, just show success — will connect to backend later
    alert('Login successful! (Backend integration pending)')
  }

  return (
    <div className="login-page">
      {/* Brand Header */}
      <div className="brand-header">
        <img src={logo} alt="Telehealings Logo" className="brand-logo" />
        <h1 className="brand-name">Telehealings</h1>
        <p className="brand-tagline">Continuity-First Wellness Care Platform</p>
        <h2 className="page-title">Admin Login</h2>
      </div>

      {/* Login Card */}
      <div className="login-wrapper">
        {/* Mascot */}
        <img src={healiPeak} alt="Heali Mascot" className="mascot" />

        <div className="login-card">
          <div className="card-body">
            {/* Error Message */}
            {error && (
              <div className="error-msg show">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Email Input */}
              <div className="input-group">
                <svg className="input-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError('') }}
                  autoComplete="email"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="input-group">
                <svg className="input-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect width="14" height="10" x="5" y="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                  <circle cx="12" cy="16" r="1" />
                </svg>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError('') }}
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="pw-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                      <path d="M14.12 14.12a3 3 0 11-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={isLoading}
                style={isLoading ? { opacity: 0.7 } : {}}
              >
                {isLoading ? 'Logging in...' : 'Log In'}
              </button>
            </form>

            <div className="links-container">
              <a href="#">Forgot Password?</a>
            </div>
          </div>

          <div className="card-footer">
            Having issues signing in? <a href="#">Contact Tech Team</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
