import {
  Factory,
  Car,
  Package,
  Utensils,
  Pill,
  Beaker,
  Cog,
  ArrowRight,
  Award,
  Users,
  Building2,
  Target,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function Industries() {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description:
        "Automation solutions for discrete and process manufacturing operations to improve efficiency and reduce downtime.",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
    },
    {
      icon: Car,
      title: "Automotive",
      description:
        "Advanced automation systems for automotive assembly lines, welding, painting, and quality control processes.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    },
    {
      icon: Package,
      title: "Packaging",
      description:
        "High-speed packaging automation with precise control for filling, sealing, labeling, and palletizing operations.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    },
    {
      icon: Utensils,
      title: "Food & Beverage",
      description:
        "Hygienic automation solutions compliant with food safety standards for processing, packaging, and distribution.",
      image: "https://images.unsplash.com/photo-1581092160562-cbe660dbde88?w=800&q=80",
    },
    {
      icon: Pill,
      title: "Pharmaceutical",
      description:
        "GMP-compliant automation systems for pharmaceutical manufacturing, ensuring quality, traceability, and compliance.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
    },
    {
      icon: Beaker,
      title: "Process Industries",
      description:
        "Continuous process automation for chemical, oil & gas, water treatment, and other process industries.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    },
    {
      icon: Cog,
      title: "Special Purpose Machines",
      description: "Custom automation solutions for specialized machinery and unique industrial applications.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    },
  ]

  return (
    <div>
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent_30%,rgba(56,189,248,0.1)_50%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">Industries We Serve</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Delivering specialized automation solutions across diverse industrial sectors with proven expertise and
              commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">Our Industry Expertise</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive automation solutions tailored to meet the unique demands of each industry sector
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-slate-100 overflow-hidden relative">
                  <img
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl mb-4 group-hover:scale-110 transition-transform shadow-md">
                    <industry.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold tracking-tight mb-4">Industry-Specific Expertise</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our team brings deep industry knowledge and proven experience to every project
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Projects Completed", icon: Award },
              { value: "7", label: "Industries Served", icon: Building2 },
              { value: "100%", label: "Client Satisfaction", icon: Users },
              { value: "15+", label: "Years Experience", icon: Target },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-xl mb-4 group-hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20">
                  <stat.icon size={32} className="text-blue-100" />
                </div>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <p className="text-blue-100 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Looking for Industry-Specific Automation?
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Contact us to discuss how we can help automate your industrial processes with tailored solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
