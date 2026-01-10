"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useTheme } from "../contexts/ThemeContext"
import { Sun, Moon } from "lucide-react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

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
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center group">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-[hsl(var(--accent))] to-[#0096D6] rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-lg md:text-xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-foreground tracking-tight leading-none">
                  AXIS<span className="text-[hsl(var(--accent))]">.</span>
                </span>
                <span className="text-[10px] md:text-xs text-muted-foreground tracking-wider uppercase leading-none">
                  Automation
                </span>
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
                    ? "text-[hsl(var(--accent))] bg-[hsl(var(--accent))]/10"
                    : "text-foreground hover:text-[hsl(var(--accent))] hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-md text-foreground hover:text-[hsl(var(--accent))] hover:bg-muted transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-[hsl(var(--accent))] text-accent-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile: Theme Toggle + CTA */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-foreground hover:text-[hsl(var(--accent))] active:scale-95 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link
              to="/contact"
              className="px-4 py-2 bg-[hsl(var(--accent))] text-accent-foreground text-xs font-semibold rounded-lg hover:opacity-90 transition-all active:scale-95"
            >
              Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
