'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function KutchNewsContact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:flutterdeveloper72@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailtoLink
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/kutch_news" className="flex items-center gap-2">
              <span className="text-3xl">📰</span>
              <span className="text-2xl font-black text-gray-900">Kutch News</span>
            </Link>
            <Link href="/kutch_news" className="text-gray-600 hover:text-orange-700 font-semibold transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Have questions, feedback, or suggestions? We&apos;d love to hear from you. Reach out to us using any of the methods below.
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-orange-400 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">📧</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Email Us</h3>
                    <p className="text-gray-600 mb-2">For general inquiries, feedback, or support</p>
                    <a href="mailto:flutterdeveloper72@gmail.com" className="text-orange-700 font-semibold hover:underline">flutterdeveloper72@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-orange-400 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">🐛</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Report a Bug</h3>
                    <p className="text-gray-600 mb-2">Found an issue? Let us know so we can fix it</p>
                    <a href="mailto:flutterdeveloper72@gmail.com?subject=Bug Report" className="text-orange-700 font-semibold hover:underline">Send Bug Report</a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-orange-400 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">💡</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Feature Request</h3>
                    <p className="text-gray-600 mb-2">Have an idea to improve the app? Share it with us</p>
                    <a href="mailto:flutterdeveloper72@gmail.com?subject=Feature Request" className="text-orange-700 font-semibold hover:underline">Suggest a Feature</a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-orange-400 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">📍</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Location</h3>
                    <p className="text-gray-600">Kutch, Gujarat, India 🇮🇳</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '2.5rem' }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Ready!</h3>
                  <p className="text-green-700">Your email client should open with the message. If not, please email us directly at flutterdeveloper72@gmail.com</p>
                  <button onClick={() => setSubmitted(false)} className="mt-4 text-orange-700 font-semibold hover:underline">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                    >
                      <option value="">Select a topic</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Bug Report">Bug Report</option>
                      <option value="Feature Request">Feature Request</option>
                      <option value="News Source Request">Add a News Source</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900 resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-700 text-white py-4 rounded-xl text-lg font-bold hover:bg-orange-800 shadow-lg hover:shadow-xl transition-all"
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black text-white py-12 mt-20">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <p className="text-gray-400">© 2025 Kutch News. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
