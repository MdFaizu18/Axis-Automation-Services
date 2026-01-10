import { Factory, Car, Package, Utensils, Pill, Beaker, Cog } from "lucide-react"

export default function Industries() {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description:
        "Automation solutions for discrete and process manufacturing operations to improve efficiency and reduce downtime.",
    },
    {
      icon: Car,
      title: "Automotive",
      description:
        "Advanced automation systems for automotive assembly lines, welding, painting, and quality control processes.",
    },
    {
      icon: Package,
      title: "Packaging",
      description:
        "High-speed packaging automation with precise control for filling, sealing, labeling, and palletizing operations.",
    },
    {
      icon: Utensils,
      title: "Food & Beverage",
      description:
        "Hygienic automation solutions compliant with food safety standards for processing, packaging, and distribution.",
    },
    {
      icon: Pill,
      title: "Pharmaceutical",
      description:
        "GMP-compliant automation systems for pharmaceutical manufacturing, ensuring quality, traceability, and compliance.",
    },
    {
      icon: Beaker,
      title: "Process Industries",
      description:
        "Continuous process automation for chemical, oil & gas, water treatment, and other process industries.",
    },
    {
      icon: Cog,
      title: "Special Purpose Machines",
      description: "Custom automation solutions for specialized machinery and unique industrial applications.",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary mb-4">
            Industries We Serve
          </h1>
          <p className="text-lg text-text-muted max-w-3xl">
            Delivering specialized automation solutions across diverse industrial sectors
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{industry.title}</h3>
                <p className="text-text-muted leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-tight mb-6">Industry-Specific Expertise</h2>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              Our team has extensive experience working across various industries, understanding the unique challenges
              and requirements of each sector. We deliver automation solutions that comply with industry standards,
              regulations, and best practices.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-text-muted">Projects Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">7</div>
                <p className="text-text-muted">Industries Served</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-text-muted">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Looking for Industry-Specific Automation?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Contact us to discuss how we can help automate your industrial processes.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-primary font-medium rounded-md hover:bg-slate-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
