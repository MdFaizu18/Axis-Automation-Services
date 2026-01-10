import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    "PLC Automation",
    "HMI Solutions",
    "AC & Servo Drives",
    "Industrial Sensors",
    "Control Panels",
    "Turnkey Projects",
  ]

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="bg-[#0A1628] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#00D4FF]/5 opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#00D4FF]/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-[#00D4FF]/30">
                <span className="text-[#00D4FF] font-bold text-xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight leading-none">
                  AXIS<span className="text-[#00D4FF]">.</span>
                </span>
                <span className="text-xs text-[#9BA5B3] tracking-wider uppercase leading-none">
                  Automation & Services
                </span>
              </div>
            </div>
            <p className="text-sm text-[#9BA5B3] leading-relaxed mb-4">
              Your trusted partner for industrial automation and control solutions. Delivering excellence in PLC
              programming, HMI design, and turnkey automation projects.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-[#1F2832] hover:bg-[#00D4FF]/20 hover:border-[#00D4FF] border border-[#29323D] rounded-lg flex items-center justify-center transition-all"
              >
                <Linkedin size={18} className="text-[#9BA5B3] hover:text-[#00D4FF]" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#1F2832] hover:bg-[#00D4FF]/20 hover:border-[#00D4FF] border border-[#29323D] rounded-lg flex items-center justify-center transition-all"
              >
                <Twitter size={18} className="text-[#9BA5B3] hover:text-[#00D4FF]" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#1F2832] hover:bg-[#00D4FF]/20 hover:border-[#00D4FF] border border-[#29323D] rounded-lg flex items-center justify-center transition-all"
              >
                <Facebook size={18} className="text-[#9BA5B3] hover:text-[#00D4FF]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#9BA5B3] hover:text-[#00D4FF] transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#00D4FF] transition-all mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service} className="text-sm text-[#9BA5B3] flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full mr-2"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 bg-[#1F2832] border border-[#29323D] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#00D4FF]" />
                </div>
                <span className="text-sm text-[#9BA5B3] pt-1.5">
                  123 Industrial Park, Sector 5<br />
                  Manufacturing District, State 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#1F2832] border border-[#29323D] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[#00D4FF]" />
                </div>
                <span className="text-sm text-[#9BA5B3]">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#1F2832] border border-[#29323D] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[#00D4FF]" />
                </div>
                <span className="text-sm text-[#9BA5B3]">info@axisautomation.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#29323D]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#9BA5B3]">
              &copy; {currentYear} AXIS Automation & Services. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-[#9BA5B3]">
              <a href="#" className="hover:text-[#00D4FF] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#00D4FF] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
