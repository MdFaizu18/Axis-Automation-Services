import { ExternalLink } from "lucide-react"
// import image from ""

export default function Projects() {
  const projects = [
    {
      name: "Automated Assembly Line",
      industry: "Automotive",
      description:
        "Complete automation of automotive assembly line with PLC-based control, robotic integration, and real-time quality monitoring.",
    },
    {
      name: "Packaging Machine Retrofit",
      industry: "Packaging",
      description:
        "Modernization of legacy packaging equipment with new PLCs, HMIs, and servo drives for improved speed and accuracy.",
    },
    {
      name: "Water Treatment Plant SCADA",
      industry: "Process Industries",
      description:
        "Implementation of comprehensive SCADA system for municipal water treatment facility with remote monitoring capabilities.",
    },
    {
      name: "Pharmaceutical Batch Control",
      industry: "Pharmaceutical",
      description:
        "GMP-compliant batch automation system with recipe management, material tracking, and electronic batch recording.",
    },
    {
      name: "Food Processing Line",
      industry: "Food & Beverage",
      description:
        "Turnkey automation solution for food processing line including mixing, cooking, cooling, and packaging operations.",
    },
    {
      name: "CNC Machine Integration",
      industry: "Manufacturing",
      description:
        "Integration of multiple CNC machines with centralized control system for coordinated production management.",
    },
    {
      name: "Conveyor System Automation",
      industry: "Manufacturing",
      description:
        "Design and implementation of automated material handling system with barcode tracking and routing logic.",
    },
    {
      name: "Special Purpose Testing Machine",
      industry: "Special Purpose Machines",
      description:
        "Custom automation solution for specialized testing equipment with data acquisition and analysis capabilities.",
    },
    {
      name: "Energy Management System",
      industry: "Manufacturing",
      description:
        "Implementation of energy monitoring and optimization system to reduce power consumption and operational costs.",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary mb-4">Our Projects</h1>
          <p className="text-lg text-text-muted max-w-3xl">
            A showcase of successful automation projects delivered across various industries
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-slate-100 overflow-hidden">
                  <img
                    src="/industrial-automation-facility.jpg"
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {project.industry}
                    </span>
                    <ExternalLink size={16} className="text-text-muted group-hover:text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Project Success Metrics</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Our commitment to excellence is reflected in our project outcomes
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Completed Projects" },
              { value: "98%", label: "On-Time Delivery" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-text-muted mb-8">Let's discuss how we can bring your automation vision to life.</p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-secondary transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}
