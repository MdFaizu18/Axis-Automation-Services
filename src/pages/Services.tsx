import { Cpu, Monitor, Gauge, Radio, Box, Rocket, ArrowRight, CheckCircle2, Clock, Users, Award } from "lucide-react"
import { Link } from "react-router-dom"

export default function Services() {
  const services = [
    {
      icon: Cpu,
      title: "PLC Automation",
      description: "Comprehensive programmable logic controller solutions for industrial automation.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop&q=80",
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
      image: "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?w=800&h=600&fit=crop&q=80",
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
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&q=80",
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
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop&q=80",
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
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop&q=80",
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
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=600&fit=crop&q=80",
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
      <section className="relative bg-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-slate-900 to-cyan-500/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive industrial automation solutions tailored to your specific needs
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-xl">
                      <service.icon className="text-white" size={28} />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Scope:</h4>
                    {service.scope.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Services</h2>
            <p className="text-xl text-blue-100">Industry-leading automation solutions with proven results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-white/20">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2">15+</h3>
              <p className="text-blue-100">Years Experience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-white/20">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2">200+</h3>
              <p className="text-blue-100">Projects Delivered</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-white/20">
                <CheckCircle2 className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2">98%</h3>
              <p className="text-blue-100">Client Satisfaction</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-white/20">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2">24/7</h3>
              <p className="text-blue-100">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Ready to Automate Your Operations?</h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Let's discuss how our services can help you achieve your automation goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-300 hover:scale-105"
          >
            Get Started
            <ArrowRight className="ml-2" size={22} />
          </Link>
        </div>
      </section>
    </div>
  )
}
