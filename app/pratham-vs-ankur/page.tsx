"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Loader2, Trophy, Zap, LogOut } from "lucide-react"
import Link from "next/link"

interface BattleData {
  current_active: string
  not_active: string
  Mukka: string
  Last_shart: string
  Last_shart_winner: string
  Last_shart_Mukka: string
}

const VALID_USERNAME = "chatbantan"
const VALID_PASSWORD = "666666"

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return <div className={`rounded-lg ${className}`}>{children}</div>
}

const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>
}

const Badge = ({
  children,
  variant = "default",
  className = "",
}: {
  children: React.ReactNode
  variant?: "default" | "secondary"
  className?: string
}) => {
  const baseClasses = "inline-flex items-center rounded-full text-xs font-medium transition-colors"
  const variantClasses =
    variant === "default" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"

  return <span className={`${baseClasses} ${variantClasses} ${className}`}>{children}</span>
}

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      localStorage.setItem("pratham_vs_ankur_auth", "true")
      onLogin()
    } else {
      setError("Invalid username or password")
      setPassword("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
        <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/WhatsApp Image 2025-10-31 at 21.00.05.jpeg" 
              alt="GIDA Warriors Logo" 
              className="w-10 h-10 rounded-lg object-cover border border-blue-500"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              GIDA Warriors
            </span>
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/" className="text-gray-300 hover:text-blue-500 transition">
              Home
            </Link>
            <Link href="/people" className="text-gray-300 hover:text-blue-500 transition">
              People
            </Link>
            <Link href="/pratham-vs-ankur" className="text-gray-300 hover:text-blue-500 transition">
              Pratham VS Ankur
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-blue-500 transition">
              Contact-Us
            </Link>
          </div>
        </div>
      </nav>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative z-10 w-full max-w-md">
        <Card className="bg-slate-900/70 backdrop-blur-sm border border-slate-700/50 shadow-2xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                GIDA Warriors
              </h1>
              <p className="text-slate-400 text-sm tracking-widest uppercase">Members Only Access</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-slate-300 text-sm font-light mb-2">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                  placeholder="Enter username"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-light mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                  placeholder="Enter password"
                />
              </div>

              {error && <p className="text-red-400 text-sm font-light">{error}</p>}

              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 mt-6"
              >
                Access Battle
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-700">
              <Link href="/people" className="block text-center text-slate-400 hover:text-cyan-400 transition text-sm">
                Back to People
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function BattleContent({ onLogout }: { onLogout: () => void }) {
  const [data, setData] = useState<BattleData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/pratham99013/config-data/main/config.json")
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError("Failed to load battle data")
        console.error("Error fetching data:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 30000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 flex items-center justify-center px-4">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-cyan-400 mx-auto mb-4" />
          <p className="text-slate-300 text-xl font-medium">Loading battle data...</p>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-slate-400 text-xl">{error || "No data available"}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            GIDA Warriors
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/" className="text-slate-300 hover:text-cyan-400 transition text-sm">
              Home
            </Link>
            <Link href="/people" className="text-slate-300 hover:text-cyan-400 transition text-sm">
              People
            </Link>
            <button
              onClick={onLogout}
              className="text-slate-300 hover:text-cyan-400 transition text-sm flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl pt-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 tracking-wider">
            PRATHAM
            <span className="text-cyan-400 mx-4 font-thin text-2xl md:text-4xl lg:text-5xl block md:inline">VS</span>
            ANKUR
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg font-light tracking-widest uppercase">The Ultimate Shart Battle</p>
        </div>

        {/* Main Battle Display */}
        <div className="space-y-8 mb-12">
          {/* Mobile/Tablet: Stacked Layout */}
          <div className="block lg:hidden space-y-6">
            {/* Center Mukka Display - First on mobile */}
            <Card className="bg-slate-900/70 backdrop-blur-sm border border-slate-700/50 shadow-2xl">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <p className="text-slate-400 text-sm font-light tracking-widest uppercase mb-2">
                    {data.current_active} has
                  </p>
                  <div className="relative mukka-display">
                    <div className="text-5xl md:text-7xl font-extralight text-white mb-2 relative">
                      {data.Mukka}
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm font-light tracking-widest uppercase">Mukka</p>
                </div>
              </CardContent>
            </Card>

            {/* Players Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Pratham Card */}
              <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-700 group">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <img
                      src="/gaming-streamer-professional-photo-pratham.jpg"
                      alt="Pratham"
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto border-3 border-slate-700 shadow-lg object-cover transition-all duration-500 group-hover:border-cyan-400/50"
                      style={{ backgroundColor: "#1e293b" }}
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Crect width='128' height='128' fill='%23334155'/%3E%3Ctext x='50%25' y='50%25' dominantBaseline='middle' textAnchor='middle' fill='%2394a3b8' fontSize='24' fontFamily='system-ui'%3EP%3C/text%3E%3C/svg%3E"
                      }}
                    />
                    {data.current_active === "Pratham" && (
                      <div className="absolute -top-1 -right-1">
                        <div className="w-5 h-5 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50 flex items-center justify-center">
                          <Zap className="w-2.5 h-2.5 text-slate-900" />
                        </div>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-light text-white mb-3 tracking-wider">PRATHAM</h3>
                  <Badge
                    variant={data.current_active === "Pratham" ? "default" : "secondary"}
                    className={`px-3 py-1.5 text-xs font-medium tracking-wide ${
                      data.current_active === "Pratham"
                        ? "bg-cyan-400/20 text-cyan-400 border border-cyan-400/30"
                        : "bg-slate-800 text-slate-400 border border-slate-700"
                    }`}
                  >
                    {data.current_active === "Pratham" ? "ACTIVE" : "INACTIVE"}
                  </Badge>
                </CardContent>
              </Card>

              {/* Ankur Card */}
              <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-700 group">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <img
                      src="/gaming-streamer-professional-photo-ankur.jpg"
                      alt="Ankur"
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto border-3 border-slate-700 shadow-lg object-cover transition-all duration-500 group-hover:border-cyan-400/50"
                      style={{ backgroundColor: "#1e293b" }}
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Crect width='128' height='128' fill='%23334155'/%3E%3Ctext x='50%25' y='50%25' dominantBaseline='middle' textAnchor='middle' fill='%2394a3b8' fontSize='24' fontFamily='system-ui'%3EA%3C/text%3E%3C/svg%3E"
                      }}
                    />
                    {data.current_active === "Ankur" && (
                      <div className="absolute -top-1 -right-1">
                        <div className="w-5 h-5 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50 flex items-center justify-center">
                          <Zap className="w-2.5 h-2.5 text-slate-900" />
                        </div>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-light text-white mb-3 tracking-wider">ANKUR</h3>
                  <Badge
                    variant={data.current_active === "Ankur" ? "default" : "secondary"}
                    className={`px-3 py-1.5 text-xs font-medium tracking-wide ${
                      data.current_active === "Ankur"
                        ? "bg-cyan-400/20 text-cyan-400 border border-cyan-400/30"
                        : "bg-slate-800 text-slate-400 border border-slate-700"
                    }`}
                  >
                    {data.current_active === "Ankur" ? "ACTIVE" : "INACTIVE"}
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Desktop: 3-Column Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center">
            {/* Pratham Card */}
            <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-700 group">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <img
                    src="/gaming-streamer-professional-photo-pratham.jpg"
                    alt="Pratham"
                    className="w-32 h-32 rounded-full mx-auto border-4 border-slate-700 shadow-lg object-cover transition-all duration-500 group-hover:border-cyan-400/50"
                    style={{ backgroundColor: "#1e293b" }}
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Crect width='128' height='128' fill='%23334155'/%3E%3Ctext x='50%25' y='50%25' dominantBaseline='middle' textAnchor='middle' fill='%2394a3b8' fontSize='24' fontFamily='system-ui'%3EP%3C/text%3E%3C/svg%3E"
                    }}
                  />
                  {data.current_active === "Pratham" && (
                    <div className="absolute -top-2 -right-2">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50 flex items-center justify-center">
                        <Zap className="w-3 h-3 text-slate-900" />
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-light text-white mb-4 tracking-wider">PRATHAM</h3>
                <Badge
                  variant={data.current_active === "Pratham" ? "default" : "secondary"}
                  className={`px-4 py-2 text-sm font-medium tracking-wide ${
                    data.current_active === "Pratham"
                      ? "bg-cyan-400/20 text-cyan-400 border border-cyan-400/30"
                      : "bg-slate-800 text-slate-400 border border-slate-700"
                  }`}
                >
                  {data.current_active === "Pratham" ? "ACTIVE" : "INACTIVE"}
                </Badge>
              </CardContent>
            </Card>

            {/* Center Mukka Display */}
            <Card className="bg-slate-900/70 backdrop-blur-sm border border-slate-700/50 shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="mb-4">
                  <p className="text-slate-400 text-sm font-light tracking-widest uppercase mb-2">
                    {data.current_active} has
                  </p>
                  <div className="relative mukka-display">
                    <div className="text-8xl font-extralight text-white mb-2 relative">
                      {data.Mukka}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm font-light tracking-widest uppercase">Mukka</p>
                </div>
              </CardContent>
            </Card>

            {/* Ankur Card */}
            <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-700 group">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <img
                    src="/gaming-streamer-professional-photo-ankur.jpg"
                    alt="Ankur"
                    className="w-32 h-32 rounded-full mx-auto border-4 border-slate-700 shadow-lg object-cover transition-all duration-500 group-hover:border-cyan-400/50"
                    style={{ backgroundColor: "#1e293b" }}
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Crect width='128' height='128' fill='%23334155'/%3E%3Ctext x='50%25' y='50%25' dominantBaseline='middle' textAnchor='middle' fill='%2394a3b8' fontSize='24' fontFamily='system-ui'%3EA%3C/text%3E%3C/svg%3E"
                    }}
                  />
                  {data.current_active === "Ankur" && (
                    <div className="absolute -top-2 -right-2">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50 flex items-center justify-center">
                        <Zap className="w-3 h-3 text-slate-900" />
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-light text-white mb-4 tracking-wider">ANKUR</h3>
                <Badge
                  variant={data.current_active === "Ankur" ? "default" : "secondary"}
                  className={`px-4 py-2 text-sm font-medium tracking-wide ${
                    data.current_active === "Ankur"
                      ? "bg-cyan-400/20 text-cyan-400 border border-cyan-400/30"
                      : "bg-slate-800 text-slate-400 border border-slate-700"
                  }`}
                >
                  {data.current_active === "Ankur" ? "ACTIVE" : "INACTIVE"}
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Current Status */}
        <Card className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 shadow-xl mb-8">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-xl font-light text-slate-300 mb-6 tracking-wider uppercase flex items-center justify-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-slate-600"></div>
                Current Status
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-slate-600"></div>
              </h3>
              <div className="relative">
                <p className="text-xl md:text-3xl text-white font-light leading-relaxed">
                  <span className="text-cyan-400">{data.current_active}</span> is{" "}
                  <span className="text-2xl md:text-4xl font-extralight text-cyan-400">{data.Mukka}X</span> more Mard
                  than <span className="text-slate-400">{data.not_active}</span>
                </p>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Last Battle */}
        <Card className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/30 shadow-xl mb-8">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Trophy className="h-5 w-5 text-slate-400 mr-3" />
                <h3 className="text-lg font-light text-slate-300 tracking-wider uppercase">Last Battle</h3>
                <Trophy className="h-5 w-5 text-slate-400 ml-3" />
              </div>
              <p className="text-slate-400 mb-6 text-base font-light leading-relaxed max-w-3xl mx-auto">
                {data.Last_shart}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex items-center space-x-2">
                  <span className="text-slate-500 text-sm">Winner:</span>
                  <Badge className="bg-slate-800 text-cyan-400 border border-slate-700 px-3 py-1 text-sm">
                    {data.Last_shart_winner}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-500 text-sm">Mukka Gained:</span>
                  <Badge className="bg-slate-800 text-white border border-slate-700 px-3 py-1 text-sm">
                    {data.Last_shart_Mukka}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center">
          <p className="text-slate-600 text-sm font-light">Updates every 30 seconds</p>
        </div>
      </div>
    </div>
  )
}

export default function PrathamVsAnkur() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    // Check if user is already authenticated
    const auth = localStorage.getItem("pratham_vs_ankur_auth")
    if (auth === "true") {
      setIsAuthenticated(true)
    }
    setIsChecking(false)
  }, [])

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem("pratham_vs_ankur_auth")
    setIsAuthenticated(false)
  }

  if (isChecking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-cyan-400" />
      </div>
    )
  }

  return isAuthenticated ? <BattleContent onLogout={handleLogout} /> : <LoginForm onLogin={handleLogin} />
}
