import { Link } from "react-router-dom"
import { Cpu, Monitor, Gauge, Radio, Box, Rocket, CheckCircle2, ArrowRight } from "lucide-react"

export default function Home() {
  const services = [
    {
      icon: Cpu,
      title: "PLC Automation",
      description: "Comprehensive PLC programming and integration for seamless industrial automation.",
    },
    {
      icon: Monitor,
      title: "HMI Solutions",
      description: "Custom HMI design with intuitive interfaces for process monitoring and control.",
    },
    {
      icon: Gauge,
      title: "AC & Servo Drives",
      description: "Drive selection, commissioning, and optimization for precision motion control.",
    },
    {
      icon: Radio,
      title: "Industrial Sensors",
      description: "Sensor integration and calibration for accurate measurement and detection.",
    },
    {
      icon: Box,
      title: "PLC Control Panels",
      description: "Complete panel design, fabrication, and commissioning services.",
    },
    {
      icon: Rocket,
      title: "Turnkey Projects",
      description: "End-to-end automation solutions from concept to commissioning.",
    },
  ]

  const features = [
    "Experienced automation engineers",
    "End-to-end automation solutions",
    "Industry-standard components",
    "Reliable installation & commissioning",
    "Prompt after-sales support",
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-text-primary mb-6">
                Industrial Automation & Control Solutions You Can Trust
              </h1>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                We specialize in PLCs, HMIs, AC & Servo Drives, Sensors, Control Panels, and Turnkey Automation projects
                to improve efficiency, reliability, and productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-secondary transition-colors"
                >
                  Request a Quote
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-slate-100 rounded-lg flex items-center justify-center">
                <img
                  src="/industrial-automation-control-panel.jpg"
                  alt="Industrial Automation"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Our Services</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Comprehensive automation solutions tailored to your industrial needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">Why Choose Us</h2>
              <p className="text-lg text-text-muted mb-8">
                Partner with a team that understands your automation challenges and delivers results that exceed
                expectations.
              </p>
              <div className="space-y-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-text-muted">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border">
              <img src="/industrial-engineer-working.jpg" alt="Why Choose Us" className="w-full h-auto rounded-md mb-6" />
              <p className="text-text-muted leading-relaxed">
                With years of experience in industrial automation, our team delivers reliable, scalable solutions that
                improve operational efficiency and reduce downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
            Looking for a dependable automation partner?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Get in touch with us to discuss your automation requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-medium rounded-md hover:bg-slate-100 transition-colors"
          >
            Contact Us Today
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
