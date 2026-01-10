import { Target, Eye, Award, Users, Lightbulb, Heart, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <div>
   
       <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent_30%,rgba(56,189,248,0.1)_50%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">About Axis Automation</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Delivering excellence in industrial automation from expertize and control over the solutions since 2008
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-blue-600 mb-6">
                Who We Are
              </div>
              <h2 className="text-4xl font-bold tracking-tight mb-6 text-slate-900">
                Building the Future of Industrial Automation
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                AXIS Automation & Services is a dedicated industrial automation company providing reliable, efficient,
                and customized automation solutions for a wide range of industrial applications.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our expertise spans PLC automation, HMI systems, AC and servo drives, industrial sensors, PLC control
                panels, and complete turnkey projects. With a focus on quality and customer satisfaction, we deliver
                solutions that drive operational excellence.
              </p>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=600&fit=crop&q=80"
                  alt="Modern Industrial Automation Facility"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-slate-900">Our Mission & Vision</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Guided by our commitment to excellence and innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white rounded-2xl p-10 relative overflow-hidden group hover:scale-[1.02] transition-transform shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 border border-white/20">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  To empower industries with cutting-edge automation solutions that enhance productivity, ensure
                  reliability, and foster sustainable growth through innovation and excellence.
                </p>
              </div>
            </div>
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-10 hover:border-blue-300 hover:shadow-xl transition-all group hover:scale-[1.02]">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-slate-900">Our Vision</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the most trusted partner in industrial automation, recognized for our technical expertise,
                customer-centric approach, and commitment to delivering world-class automation solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-slate-900">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for the highest standards in every project we undertake",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "We embrace new technologies and creative solutions to solve complex challenges",
              },
              {
                icon: Heart,
                title: "Integrity",
                description: "We build trust through transparency, honesty, and ethical business practices",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-8 text-center hover:shadow-xl hover:border-blue-300 transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach & Expertise */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Our Approach</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We believe in understanding customer requirements in depth and delivering practical, scalable, and
                cost-effective automation solutions.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our team works closely with clients throughout the project lifecycle, from initial consultation and
                design to implementation, testing, and ongoing support. We ensure seamless integration with existing
                systems while maintaining the highest standards of quality and safety.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Our Expertise</h2>
              </div>
              <ul className="space-y-3">
                {[
                  "PLC programming and integration",
                  "HMI design and visualization",
                  "AC & servo drives configuration",
                  "Industrial sensor selection",
                  "Control panel design",
                  "Turnkey project execution",
                  "System upgrades",
                  "Technical training",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    <span className="text-slate-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">Why Partner With AXIS?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We combine technical excellence with a customer-first mindset to deliver automation solutions that truly
              make a difference.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "Technical Excellence",
                description: "Certified engineers with deep expertise in industrial automation",
              },
              {
                title: "Reliable Support",
                description: "Prompt after-sales service whenever you need it",
              },
              {
                title: "Proven Track Record",
                description: "500+ successful projects across multiple industries",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all"
              >
                <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              Get Started Today
              <ArrowRight className="ml-2" size={22} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
