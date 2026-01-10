import { ExternalLink, Award, Clock, Users, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"

export default function Projects() {
  const projects = [
    {
      name: "Automated Assembly Line",
      industry: "Automotive",
      description:
        "Complete automation of automotive assembly line with PLC-based control, robotic integration, and real-time quality monitoring.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    },
    {
      name: "Packaging Machine Retrofit",
      industry: "Packaging",
      description:
        "Modernization of legacy packaging equipment with new PLCs, HMIs, and servo drives for improved speed and accuracy.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    },
    {
      name: "Water Treatment Plant SCADA",
      industry: "Process Industries",
      description:
        "Implementation of comprehensive SCADA system for municipal water treatment facility with remote monitoring capabilities.",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
    },
    {
      name: "Pharmaceutical Batch Control",
      industry: "Pharmaceutical",
      description:
        "GMP-compliant batch automation system with recipe management, material tracking, and electronic batch recording.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
    },
    {
      name: "Food Processing Line",
      industry: "Food & Beverage",
      description:
        "Turnkey automation solution for food processing line including mixing, cooking, cooling, and packaging operations.",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80",
    },
    {
      name: "CNC Machine Integration",
      industry: "Manufacturing",
      description:
        "Integration of multiple CNC machines with centralized control system for coordinated production management.",
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    },
    {
      name: "Conveyor System Automation",
      industry: "Manufacturing",
      description:
        "Design and implementation of automated material handling system with barcode tracking and routing logic.",
      image: "https://images.unsplash.com/photo-1586528116493-a029325540fa?w=800&q=80",
    },
    {
      name: "Special Purpose Testing Machine",
      industry: "Special Purpose Machines",
      description:
        "Custom automation solution for specialized testing equipment with data acquisition and analysis capabilities.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    },
    {
      name: "Energy Management System",
      industry: "Manufacturing",
      description:
        "Implementation of energy monitoring and optimization system to reduce power consumption and operational costs.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    },
  ]

  return (
    <div className="bg-dark">
      <section className="relative bg-dark-lighter py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
              <span className="text-white">Our </span>
              <span className="text-cyan">Projects</span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              A showcase of successful automation projects delivered across various industries, demonstrating our
              expertise and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Explore our portfolio of successful automation implementations across diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group bg-dark-lighter border border-cyan/20 rounded-xl overflow-hidden hover:border-cyan transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-lighter/90 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-cyan bg-cyan/10 px-3 py-1.5 rounded-full border border-cyan/30">
                      {project.industry}
                    </span>
                    <ExternalLink
                      size={18}
                      className="text-text-muted group-hover:text-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">{project.description}</p>
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
            <h2 className="text-4xl font-semibold tracking-tight mb-4 text-white">Project Success Metrics</h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Our commitment to excellence is reflected in our project outcomes
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Completed Projects", icon: Award },
              { value: "98%", label: "On-Time Delivery", icon: Clock },
              { value: "100%", label: "Client Satisfaction", icon: Users },
              { value: "24/7", label: "Support Available", icon: TrendingUp },
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
          <h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-text-muted mb-10 leading-relaxed">
            Let's discuss how we can bring your automation vision to life with proven expertise and dedication.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-dark font-semibold rounded-lg hover:bg-cyan/90 transition-all shadow-lg shadow-cyan/30 hover:scale-105"
          >
            Contact Us Today
            <ExternalLink size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
