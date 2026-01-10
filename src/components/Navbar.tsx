"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => location.pathname === href

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center group">
            <div className="flex items-center gap-2">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div> */}
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary tracking-tight leading-none">AXIS</span>
                <span className="text-xs text-text-muted tracking-wider uppercase leading-none">Automation & Services</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  isActive(link.href)
                    ? "text-primary bg-accent/10"
                    : "text-text-muted hover:text-primary hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-105"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-muted hover:text-primary rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "text-primary bg-accent/10"
                    : "text-text-muted hover:text-primary hover:bg-muted"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block text-center px-4 py-3 bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
