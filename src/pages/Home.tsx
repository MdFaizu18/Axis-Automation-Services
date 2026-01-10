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
    <div>
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-90">
            <source src="/landing.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-blue-900/90"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20">
              <Zap size={16} className="text-blue-400" />
              <span className="text-white">Industrial Automation Excellence</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-white">
              Industrial Automation & Control Solutions You Can Trust
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl">
              We specialize in PLCs, HMIs, AC & Servo Drives, Sensors, Control Panels, and Turnkey Automation projects
              to improve efficiency, reliability, and productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Request a Quote
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-slate-300 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-blue-600 mb-4">
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900">
              Comprehensive Automation Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From PLC programming to turnkey projects, we deliver tailored industrial automation solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white border border-slate-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
                <div className="mt-6 flex items-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-blue-600 mb-6">
                Why Choose AXIS
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                Your Trusted Automation Partner
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Partner with a team that understands your automation challenges and delivers results that exceed
                expectations.
              </p>
              <div className="space-y-4">
                {features.map((feature) => (
                  <div
                    key={feature.text}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="text-white" size={22} />
                    </div>
                    <span className="font-medium text-slate-900">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&q=80"
                  alt="Industrial Engineers Working"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Get in touch with us to discuss your automation requirements and discover how we can help you achieve
            operational excellence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            Contact Us Today
            <ArrowRight className="ml-2" size={22} />
          </Link>
        </div>
      </section>
    </div>
  )
}
