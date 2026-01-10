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
    <div className="bg-dark">
      <section className="relative bg-dark-lighter py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
              <span className="text-white">Get In </span>
              <span className="text-cyan">Touch</span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              Have a question or need assistance? We're here to help you with your industrial automation needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-dark-lighter border border-cyan/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-cyan/10 border border-cyan/30 rounded-lg flex items-center justify-center">
                  <MessageSquare className="text-cyan" size={24} />
                </div>
                <h2 className="text-3xl font-semibold text-white">Send Us a Message</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark border border-cyan/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent transition-all placeholder:text-text-muted"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark border border-cyan/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent transition-all placeholder:text-text-muted"
                    placeholder="john.doe@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark border border-cyan/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent transition-all placeholder:text-text-muted"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark border border-cyan/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent resize-none transition-all placeholder:text-text-muted"
                    placeholder="Tell us about your automation requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-cyan text-dark font-semibold rounded-lg hover:bg-cyan/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan/30 hover:scale-[1.02]"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-white mb-8">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="bg-dark-lighter border border-cyan/20 rounded-xl p-6 hover:border-cyan transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-cyan/10 border border-cyan/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-cyan" size={28} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-2">Our Location</h3>
                      <p className="text-text-muted leading-relaxed">
                        123 Industrial Park, Sector 5<br />
                        Manufacturing District
                        <br />
                        State 12345, Country
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-dark-lighter border border-cyan/20 rounded-xl p-6 hover:border-cyan transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-cyan/10 border border-cyan/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-cyan" size={28} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-2">Phone Numbers</h3>
                      <p className="text-text-muted mb-1">+1 (555) 123-4567</p>
                      <p className="text-text-muted">+1 (555) 987-6543</p>
                    </div>
                  </div>
                </div>

                <div className="bg-dark-lighter border border-cyan/20 rounded-xl p-6 hover:border-cyan transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-cyan/10 border border-cyan/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-cyan" size={28} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-2">Email Address</h3>
                      <p className="text-text-muted mb-1">info@axisautomation.com</p>
                      <p className="text-text-muted">sales@axisautomation.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dark-lighter border border-cyan/20 rounded-xl overflow-hidden mb-6">
                <div className="aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                    alt="Location Map"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
              </div>

              <div className="bg-dark-lighter border border-cyan/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-cyan" size={24} />
                  <h3 className="font-semibold text-white text-xl">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-cyan/20">
                    <span className="text-text-muted">Monday - Friday</span>
                    <span className="font-semibold text-white flex items-center gap-2">
                      <CheckCircle size={16} className="text-cyan" />
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-cyan/20">
                    <span className="text-text-muted">Saturday</span>
                    <span className="font-semibold text-white flex items-center gap-2">
                      <CheckCircle size={16} className="text-cyan" />
                      9:00 AM - 2:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Sunday</span>
                    <span className="font-semibold text-white">Closed</span>
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
