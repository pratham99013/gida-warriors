"use client"

import { useState } from "react"
import Link from "next/link"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    queries: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  const submitData = new FormData()
  submitData.append("name", formData.name)
  submitData.append("email", formData.email)
  submitData.append("phone", formData.phone)
  submitData.append("occupation", formData.occupation)
  submitData.append("queries", formData.queries)
  submitData.append("message", formData.message)

  // ✅ Send to first email
  submitData.append("_to", "prathammishra99013@gmail.com")

  // ✅ CC to the others
  submitData.append("_cc", "ankurmishra123123@gmail.com,synapse2922@gmail.com")

  try {
    const response = await fetch("https://formsubmit.co/ajax/prathammishra99013@gmail.com", {
      method: "POST",
      body: submitData
    })

    if (response.ok) {
      setShowToast(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        occupation: "",
        queries: "",
        message: ""
      })
      setTimeout(() => setShowToast(false), 5000)
    }
  } catch (error) {
    console.error("Form submission error:", error)
  } finally {
    setIsSubmitting(false)
  }
}
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Navigation */}
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

            <Link href="/contact" className="text-gray-300 hover:text-blue-500 transition">
              Contact-Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 right-4 z-50 bg-blue-600 text-white px-6 py-4 rounded-lg shadow-lg border-2 border-purple-500 animate-in slide-in-from-top-5">
          <p className="font-semibold">✓ Message Sent!</p>
          <p className="text-sm opacity-90">Our team will contact you within 24 hours</p>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage:
              'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Destiny%202%20Explosion%20GIF%20by%20DestinyTheGame-rgeiXHhFe1uv9SsfXvqWpon0u2Exbo.gif")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-gray-950/90 via-gray-950/80 to-gray-950"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Join the Warriors
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Ready to become part of the legacy? Connect with us and embark on an adventure!
          </p>
        </div>
      </section>

      {/* Contact Form Section - Enhanced Background */}
      <section className="py-16 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-purple-950/30 to-gray-950"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
          
          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Glow effects on card */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-950/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition text-white placeholder-gray-500"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-950/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition text-white placeholder-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-950/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition text-white placeholder-gray-500"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      What do you do? *
                    </label>
                    <select
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-950/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition text-white"
                    >
                      <option value="">Select...</option>
                      <option value="Student">Student</option>
                      <option value="Working Professional">Working Professional</option>
                      <option value="Businessman">Businessman</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Queries (Optional)
                  </label>
                  <input
                    type="text"
                    name="queries"
                    value={formData.queries}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-950/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition text-white placeholder-gray-500"
                    placeholder="Any specific questions?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-950/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition text-white placeholder-gray-500 resize-none"
                    placeholder="Tell us why you want to join GIDA Warriors..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg font-semibold rounded-lg transition shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit & Join the Warriors"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-white">Or Reach Us Directly</h2>
            <p className="text-gray-400">Connect with our warriors via email</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:prathammishra99013@gmail.com"
              className="bg-gray-900/60 border border-gray-800 hover:border-blue-500 rounded-xl p-6 text-center transition group backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-400 mb-1">Pratham Mishra</p>
              <p className="text-xs text-white break-all">prathammishra99013@gmail.com</p>
            </a>

            <a
              href="mailto:ankurmishra123123@gmail.com"
              className="bg-gray-900/60 border border-gray-800 hover:border-blue-500 rounded-xl p-6 text-center transition group backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-400 mb-1">Ankur Mishra</p>
              <p className="text-xs text-white break-all">ankurmishra123123@gmail.com</p>
            </a>

            <a
              href="mailto:synapse2922@gmail.com"
              className="bg-gray-900/60 border border-gray-800 hover:border-blue-500 rounded-xl p-6 text-center transition group backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-400 mb-1">Synapse Team</p>
              <p className="text-xs text-white break-all">synapse2922@gmail.com</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>© 2025 GIDA Warriors. All rights reserved.</p>
          <p className="mt-2 text-sm">Passion • Brotherhood • Adventure</p>
        </div>
      </footer>
    </div>
  )
}