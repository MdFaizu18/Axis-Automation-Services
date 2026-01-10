import { Link, useLocation } from "react-router-dom"
import { Home, Info, Briefcase, Building2, FolderOpen, Phone } from "lucide-react"

export default function MobileBottomNav() {
  const location = useLocation()

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Industries", href: "/industries", icon: Building2 },
    { name: "Projects", href: "/projects", icon: FolderOpen },
    { name: "Contact", href: "/contact", icon: Phone },
  ]

  const isActive = (href: string) => location.pathname === href

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0A1628] border-t border-[#29323D] shadow-2xl backdrop-blur-lg">
      <div className="grid grid-cols-6 h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex flex-col items-center justify-center gap-1 transition-all ${
                active ? "text-[#00D4FF]" : "text-[#9BA5B3] active:scale-95"
              }`}
            >
              <Icon
                size={20}
                strokeWidth={active ? 2.5 : 2}
                className={active ? "drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]" : ""}
              />
              <span className={`text-[9px] font-medium ${active ? "font-semibold" : ""}`}>{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
