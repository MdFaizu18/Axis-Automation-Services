import { Link } from "react-router-dom"

import { Mail, Phone, MapPin } from "lucide-react"


export default function Footer() {
  const year = new Date().getFullYear()

  const services = [
    "PLC Automation",
    "HMI Solutions",
    "AC & Servo Drives",
    "Industrial Sensors",
    "Control Panels",
    "Turnkey Projects",
  ]

  const links = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="relative bg-[#0A1628] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] to-[#00D4FF]/5 opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* 🔹 GRID FIX */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* BRAND */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#00D4FF]/20 border border-[#00D4FF]/30 rounded-lg flex items-center justify-center">
                <span className="text-[#00D4FF] font-bold text-lg">A</span>
              </div>
              <div>
                <p className="text-lg font-bold leading-none">
                  AXIS<span className="text-[#00D4FF]">.</span>
                </p>
                <p className="text-xs mt-1  text-[#9BA5B3] uppercase tracking-wider">
                  Automation & Services
                </p>
              </div>
            </div>

            <p className="text-sm text-[#9BA5B3] leading-relaxed mb-4">
              Industrial automation and control solutions.
            </p>

            {/* <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 bg-[#1F2832] border border-[#29323D] rounded-lg flex items-center justify-center hover:border-[#00D4FF] hover:bg-[#00D4FF]/20 transition"
                >
                  <Icon size={16} className="text-[#9BA5B3] hover:text-[#00D4FF]" />
                </a>
              ))}
            </div> */}
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.href}
                    className="text-sm text-[#9BA5B3] hover:text-[#00D4FF] transition"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="text-sm text-[#9BA5B3]">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-sm font-semibold mb-3">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm text-[#9BA5B3]">
                <MapPin size={16} className="text-[#00D4FF]" />
                Industrial Park, Sector-5
              </li>
              <li className="flex gap-2 text-sm text-[#9BA5B3]">
                <Phone size={16} className="text-[#00D4FF]" />
                +91 9443511343
              </li>
              <li className="flex gap-2 text-sm text-[#9BA5B3]">
                <Mail size={16} className="text-[#00D4FF]" />
                axis_hsr@rediffmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 pt-6 border-t border-[#29323D] text-xs text-[#9BA5B3] flex flex-col sm:flex-row justify-between gap-3">
          <p>© {year} Axis Automation & Services</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#00D4FF]">Privacy</a>
            <a href="#" className="hover:text-[#00D4FF]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
