import { Cpu, Monitor, Gauge, Radio, Box, Rocket, ArrowRight, CheckCircle2 } from "lucide-react"
import { Link } from "react-router-dom"

const serviceImages = {
  hmi: "/assets/images/HMI.jpeg",
  controlPanel: "/assets/images/ControlPanel.jpeg",
  sensors: "/assets/images/Sensors.jpeg",
  servo: "/assets/images/Servo.jpeg",
  plc: "/assets/images/PLC1.jpeg",
  turnkey: "/assets/images/Turnkey.jpeg",
}

export default function Services() {

  const services = [
    {
      icon: Cpu,
      title: "PLC Automation",
      description: "Comprehensive programmable logic controller solutions for industrial automation.",
      image: serviceImages.plc,
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
      image: serviceImages.hmi,
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
      image: serviceImages.servo,
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
      image: serviceImages.sensors,
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
      image: serviceImages.controlPanel,
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
      image: serviceImages.turnkey,
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
    <div className="bg-dark">
      <section className="relative bg-dark-lighter text-white py-12 lg:py-20  overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight mb-6">
            <span className="text-white">Our </span>
            <span className="text-cyan">Services</span>
          </h1>
          <p className="text-xl lg:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Comprehensive industrial automation solutions tailored to your specific needs
          </p>
        </div>
      </section>

      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-dark-lighter border border-cyan/20 rounded-2xl overflow-hidden hover:border-cyan transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-lighter/95 via-dark/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-14 h-14 bg-cyan/90 rounded-xl flex items-center justify-center shadow-xl">
                      <service.icon className="text-dark" size={28} />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-text-muted mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3 border-t border-cyan/20 pt-6">
                    <h4 className="text-sm font-bold text-cyan uppercase tracking-wide">Scope:</h4>
                    {service.scope.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="text-cyan flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm text-text-muted">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    



      <section className="py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">Ready to Automate Your Operations?</h2>
          <p className="text-xl text-text-muted mb-10 leading-relaxed">
            Let's discuss how our services can help you achieve your automation goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-cyan text-dark font-bold text-lg rounded-xl hover:bg-cyan/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan/30"
          >
            Get Started
            <ArrowRight className="ml-2" size={22} />
          </Link>
        </div>
      </section>
    </div>
  )
}
