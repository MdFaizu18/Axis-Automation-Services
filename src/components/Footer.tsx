import { Link } from "react-router-dom"
import { Mail, Phone, MapPin } from "lucide-react"

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
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AutomationTech</h3>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Your trusted partner for industrial automation and control solutions. Delivering excellence in PLC
              programming, HMI design, and turnkey automation projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm text-secondary-foreground/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  123 Industrial Park, Sector 5<br />
                  Manufacturing District, State 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">info@automationtech.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <p className="text-center text-sm text-secondary-foreground/60">
            &copy; {currentYear} AutomationTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
