import { Cpu, Monitor, Gauge, Radio, Box, Rocket } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Cpu,
      title: "PLC Automation",
      description: "Comprehensive programmable logic controller solutions for industrial automation.",
      scope: [
        "PLC programming and configuration",
        "Machine & process automation",
        "System upgrades and retrofits",
        "Fault diagnosis and troubleshooting",
        "Integration with existing systems",
      ],
    },
    {
      icon: Monitor,
      title: "HMI Solutions",
      description: "Human-Machine Interface design for intuitive process control and monitoring.",
      scope: [
        "Custom HMI screen design",
        "Alarms & events management",
        "Real-time data monitoring",
        "User-friendly navigation",
        "Multi-language support",
      ],
    },
    {
      icon: Gauge,
      title: "AC & Servo Drives",
      description: "Variable frequency drives and servo systems for precise motion control.",
      scope: [
        "VFD selection & commissioning",
        "Servo system configuration",
        "Speed, torque & position control",
        "Energy optimization",
        "Drive troubleshooting and repair",
      ],
    },
    {
      icon: Radio,
      title: "Industrial Sensors",
      description: "Sensor integration and calibration for accurate industrial measurements.",
      scope: [
        "Proximity & photoelectric sensors",
        "Temperature, pressure & level sensors",
        "Encoder and resolver integration",
        "Calibration & PLC interfacing",
        "Sensor selection consulting",
      ],
    },
    {
      icon: Box,
      title: "PLC Control Panels",
      description: "Complete control panel design, fabrication, and commissioning services.",
      scope: [
        "Electrical panel design",
        "Component selection and sourcing",
        "Wiring & FAT testing",
        "On-site installation",
        "Commissioning and handover",
      ],
    },
    {
      icon: Rocket,
      title: "Turnkey Projects",
      description: "End-to-end automation project execution from concept to completion.",
      scope: [
        "Requirement analysis & feasibility study",
        "System design & engineering",
        "Hardware procurement & supply",
        "Installation & commissioning",
        "Training & ongoing support",
      ],
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary mb-4">Our Services</h1>
          <p className="text-lg text-text-muted max-w-3xl">
            Comprehensive industrial automation solutions tailored to your specific needs
          </p>
        </div>
      </section>

      {/* Services Detailed Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="text-primary" size={28} />
                    </div>
                    <h2 className="text-3xl font-semibold">{service.title}</h2>
                  </div>
                  <p className="text-lg text-text-muted mb-6">{service.description}</p>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Scope of Services:</h3>
                    <ul className="space-y-3">
                      {service.scope.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-muted rounded-lg overflow-hidden border border-border">
                    <img
                      src={`/.jpg?height=400&width=600&query=${service.title.toLowerCase().replace(/\s+/g, "+")}`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Ready to Automate Your Operations?</h2>
          <p className="text-lg text-text-muted mb-8">
            Let's discuss how our services can help you achieve your automation goals.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-secondary transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  )
}
