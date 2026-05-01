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

const landingVideoPath = "/assets/video/landing.mp4"

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
    { value: "25+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
  ]

  return (
    <div className="bg-dark">
      <section className="relative bg-dark overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
            <source src={landingVideoPath} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-dark/95 via-dark-lighter/95 to-dark/95"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28">
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
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-dark font-semibold rounded-lg bg-white/90  text-black transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan/20"
              >
                Request a Quote
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/8 text-white font-semibold rounded-lg hover:bg-cyan/10 backdrop-blur-sm transition-all duration-300"
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

    <section className="relative py-16 md:py-24 bg-muted overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-10 left-10 w-56 h-56 md:w-72 md:h-72 bg-[hsl(var(--accent))] rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-72 h-72 md:w-96 md:h-96 bg-[hsl(var(--accent))] rounded-full blur-3xl animate-pulse delay-1000"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-12 md:mb-20">
      <span className="inline-block px-3 py-1.5 bg-[hsl(var(--accent))]/10 border border-[hsl(var(--accent))]/30 rounded-full text-[hsl(var(--accent))] text-xs md:text-sm font-semibold uppercase tracking-wider mb-4">
        What We Offer
      </span>

      <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight mb-4 md:mb-6">
        <span className="text-foreground">Our Core </span>
        <span className="text-[hsl(var(--accent))]">Services</span>
      </h2>

      <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto">
        Comprehensive automation solutions tailored to your industrial needs
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-10">
      {services.map((service, index) => (
        <div
          key={service.title}
          className={`group relative ${index === 0 || index === 5 ? "lg:translate-y-8" : ""}`}
        >
          {/* Gradient border (desktop focus) */}
          <div className="hidden md:block absolute -inset-0.5 bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--accent))]/30 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur"></div>

          {/* Card */}
          <div className="relative bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-8 h-full transition-all duration-300 md:group-hover:-translate-y-2 md:group-hover:shadow-2xl md:group-hover:shadow-[hsl(var(--accent))]/20">
            {/* Icon */}
            <div className="relative mb-4 md:mb-6">
              <div className="relative w-10 h-10 md:w-16 md:h-16 bg-[hsl(var(--accent))]/10 border border-[hsl(var(--accent))]/30 rounded-xl md:rounded-2xl flex items-center justify-center md:group-hover:scale-110 md:group-hover:rotate-6 transition-all duration-500">
                <service.icon
                  className="text-[hsl(var(--accent))]"
                  size={20}
                //   md:size={32}
                  strokeWidth={2}
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-sm md:text-2xl font-semibold mb-2 md:mb-4 text-foreground md:group-hover:text-[hsl(var(--accent))] transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
              {service.description}
            </p>

            {/* Learn more (desktop only) */}
            <Link
              to="/services"
              className="hidden md:inline-flex items-center mt-6 text-[hsl(var(--accent))] font-medium opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
              Learn More
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="text-center mt-12 md:mt-16">
      <p className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-6">
        Need a custom automation solution?
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] font-semibold rounded-lg md:rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
      >
        Request Custom Quote
        <ArrowRight className="ml-2" size={18} />
      </Link>
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
