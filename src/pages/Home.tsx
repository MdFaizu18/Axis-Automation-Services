import { Link } from "react-router-dom"
import {
  Cpu,
  Monitor,
  Gauge,
  Radio,
  Box,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react"

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
    { icon: CheckCircle2, text: "Experienced automation engineers" },
    { icon: Shield, text: "Industry-standard components" },
    { icon: Zap, text: "Reliable installation & commissioning" },
    { icon: TrendingUp, text: "Prompt after-sales support" },
  ]

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "250+", label: "Happy Clients" },
    { value: "15+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
  ]

  return (
    <div className="bg-dark">
      <section className="relative bg-dark overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
            <source src="/landing.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-dark/95 via-dark-lighter/95 to-dark/95"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight mb-8 leading-[1.1]">
              <span className="text-white">Industrial Automation &</span>
              <br />
              <span className="text-cyan">Control Solutions</span>
              <br />
              <span className="text-white">You Can Trust</span>
            </h1>
            <p className="text-xl lg:text-2xl text-text-muted mb-10 leading-relaxed max-w-3xl">
              Experts in PLCs, HMIs, Drives, Sensors & Turnkey Automation Projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-cyan text-dark font-semibold rounded-lg hover:bg-cyan/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan/20"
              >
                Request a Quote
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan/50 text-white font-semibold rounded-lg hover:bg-cyan/10 backdrop-blur-sm transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-xl p-6 text-center hover:bg-cyan/10 transition-all duration-300"
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-text-muted uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
              <span className="text-white">Our Core </span>
              <span className="text-cyan">Services</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Comprehensive automation solutions tailored to your industrial needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-dark border-b-4 border-cyan/30 rounded-xl p-8 hover:border-cyan transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-cyan/10 border border-cyan/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan/20 transition-colors">
                  <service.icon className="text-cyan" size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-text-muted leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
              <span className="text-white">Why Choose </span>
              <span className="text-cyan">Us?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.text} className="text-center group">
                <div className="w-20 h-20 bg-cyan/10 border border-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan/20 transition-colors">
                  <feature.icon className="text-cyan" size={32} />
                </div>
                <p className="font-medium text-white">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-dark-lighter overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
            <span className="text-white">Get in </span>
            <span className="text-cyan">Touch</span>
          </h2>
          <p className="text-xl text-text-muted mb-10 leading-relaxed">Looking for Reliable Automation Solutions?</p>
          <p className="text-lg text-text-muted mb-10">Contact us today to discuss your project requirements</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-cyan text-dark font-bold text-lg rounded-lg hover:bg-cyan/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan/30"
          >
            Get a Quote
            <ArrowRight className="ml-2" size={22} />
          </Link>
        </div>
      </section>
    </div>
  )
}
