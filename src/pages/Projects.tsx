import { ExternalLink, Award, Clock, Users, TrendingUp } from "lucide-react"

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
    <div>
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent_30%,rgba(56,189,248,0.1)_50%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">Our Projects</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              A showcase of successful automation projects delivered across various industries, demonstrating our
              expertise and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our portfolio of successful automation implementations across diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-slate-100 overflow-hidden relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                      {project.industry}
                    </span>
                    <ExternalLink
                      size={18}
                      className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
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
            <h2 className="text-4xl font-semibold tracking-tight mb-4">Project Success Metrics</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
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
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Let's discuss how we can bring your automation vision to life with proven expertise and dedication.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Contact Us Today
            <ExternalLink size={18} />
          </a>
        </div>
      </section>
    </div>
  )
}
