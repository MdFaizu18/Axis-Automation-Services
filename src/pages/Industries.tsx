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
    <div className="bg-dark">
      <section className="relative bg-dark-lighter py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
              <span className="text-white">Industries We </span>
              <span className="text-cyan">Serve</span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              Delivering specialized automation solutions across diverse industrial sectors with proven expertise and
              commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Our Industry Expertise</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Comprehensive automation solutions tailored to meet the unique demands of each industry sector
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="group bg-dark-lighter border border-cyan/20 rounded-xl overflow-hidden hover:border-cyan transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-lighter/90 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan/10 border border-cyan/30 rounded-xl mb-4 group-hover:bg-cyan/20 transition-colors">
                    <industry.icon className="text-cyan" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-lighter relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d4ff_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold tracking-tight mb-4 text-white">Industry-Specific Expertise</h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan/10 border border-cyan/30 rounded-xl mb-4 group-hover:bg-cyan/20 transition-colors">
                  <stat.icon size={32} className="text-cyan" />
                </div>
                <div className="text-5xl font-bold mb-2 text-white">{stat.value}</div>
                <p className="text-text-muted text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white mb-4">
            Looking for Industry-Specific Automation?
          </h2>
          <p className="text-xl text-text-muted mb-10 leading-relaxed">
            Contact us to discuss how we can help automate your industrial processes with tailored solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-dark font-semibold rounded-lg hover:bg-cyan/90 transition-all shadow-lg shadow-cyan/30 hover:scale-105"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
