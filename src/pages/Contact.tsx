"use client"

import type React from "react"
import { useState, type FormEvent } from "react"
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, CheckCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent_30%,rgba(56,189,248,0.1)_50%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">Get In Touch</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Have a question or need assistance? We're here to help you with your industrial automation needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="text-blue-600" size={24} />
                </div>
                <h2 className="text-3xl font-semibold text-slate-900">Send Us a Message</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="john.doe@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                    placeholder="Tell us about your automation requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-slate-900 mb-8">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-blue-600" size={28} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg mb-2">Our Location</h3>
                      <p className="text-slate-600 leading-relaxed">
                        123 Industrial Park, Sector 5<br />
                        Manufacturing District
                        <br />
                        State 12345, Country
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-blue-600" size={28} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg mb-2">Phone Numbers</h3>
                      <p className="text-slate-600 mb-1">+1 (555) 123-4567</p>
                      <p className="text-slate-600">+1 (555) 987-6543</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-blue-600" size={28} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg mb-2">Email Address</h3>
                      <p className="text-slate-600 mb-1">info@axisautomation.com</p>
                      <p className="text-slate-600">sales@axisautomation.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200 mb-6">
                <div className="aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                    alt="Location Map"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 shadow-xl text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={24} />
                  <h3 className="font-semibold text-xl">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-blue-100">Monday - Friday</span>
                    <span className="font-semibold flex items-center gap-2">
                      <CheckCircle size={16} />
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-blue-100">Saturday</span>
                    <span className="font-semibold flex items-center gap-2">
                      <CheckCircle size={16} />
                      9:00 AM - 2:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
