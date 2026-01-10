import { Target, Eye, Award, Users, Lightbulb, Heart, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className="bg-dark">
      <section className="relative bg-dark-lighter text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              <span className="text-white">About </span>
              <span className="text-cyan">AXIS</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Delivering excellence in industrial automation and control solutions since 2008
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight mb-6 text-white">
                Building the Future of Industrial Automation
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-6">
                AXIS Automation & Services is a dedicated industrial automation company providing reliable, efficient,
                and customized automation solutions for a wide range of industrial applications.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
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

      <section className="py-24 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold tracking-tight mb-4 text-white">Our Mission & Vision</h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Guided by our commitment to excellence and innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-dark border border-cyan/30 rounded-2xl p-10 relative overflow-hidden group hover:border-cyan transition-colors">
              <div className="w-16 h-16 bg-cyan/10 border border-cyan/30 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-cyan" size={32} />
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-white">Our Mission</h3>
              <p className="text-lg text-text-muted leading-relaxed">
                To empower industries with cutting-edge automation solutions that enhance productivity, ensure
                reliability, and foster sustainable growth through innovation and excellence.
              </p>
            </div>
            <div className="bg-dark border border-cyan/30 rounded-2xl p-10 hover:border-cyan transition-colors group">
              <div className="w-16 h-16 bg-cyan/10 border border-cyan/30 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-cyan" size={32} />
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-white">Our Vision</h3>
              <p className="text-lg text-text-muted leading-relaxed">
                To be the most trusted partner in industrial automation, recognized for our technical expertise,
                customer-centric approach, and commitment to delivering world-class automation solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold tracking-tight mb-4 text-white">Our Core Values</h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">The principles that guide everything we do</p>
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
                className="bg-dark-lighter border border-cyan/20 rounded-xl p-8 text-center hover:border-cyan transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-cyan/10 border border-cyan/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-cyan" size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-text-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-dark border border-cyan/20 rounded-2xl p-10 hover:border-cyan transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-cyan/10 border border-cyan/30 rounded-xl flex items-center justify-center">
                  <Award className="text-cyan" size={24} />
                </div>
                <h2 className="text-3xl font-semibold text-white">Our Approach</h2>
              </div>
              <p className="text-lg text-text-muted leading-relaxed mb-6">
                We believe in understanding customer requirements in depth and delivering practical, scalable, and
                cost-effective automation solutions.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                Our team works closely with clients throughout the project lifecycle, from initial consultation and
                design to implementation, testing, and ongoing support. We ensure seamless integration with existing
                systems while maintaining the highest standards of quality and safety.
              </p>
            </div>
            <div className="bg-dark border border-cyan/20 rounded-2xl p-10 hover:border-cyan transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-cyan/10 border border-cyan/30 rounded-xl flex items-center justify-center">
                  <Users className="text-cyan" size={24} />
                </div>
                <h2 className="text-3xl font-semibold text-white">Our Expertise</h2>
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
                    <div className="w-2 h-2 rounded-full bg-cyan flex-shrink-0" />
                    <span className="text-text-muted font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-white">
              Why Partner With AXIS?
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
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
                className="bg-cyan/10 border border-cyan/30 rounded-xl p-8 hover:bg-cyan/20 transition-all"
              >
                <h3 className="text-2xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-cyan text-dark font-bold text-lg rounded-lg hover:bg-cyan/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan/30"
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
