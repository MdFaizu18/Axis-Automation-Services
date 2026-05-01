import {  Eye, Award, Users, Lightbulb, Heart, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className="bg-dark">
      <section className="relative bg-dark-lighter text-white py-12 md:py-4 lg:py-20  overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              <span className="text-white">About </span>
              <span className="text-white">us</span>
            </h1>
            <p className=" text-lg md:text-lg lg:text-xl  text-slate-300 leading-relaxed">
              Delivering excellence in industrial automation services and control solutions since 2001.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight mb-6 text-white">
                About Axis Automation & Services
              </h2>

              <p className="text-lg text-text-muted leading-relaxed mb-6">
                Axis Automation & Services is a specialized industrial automation company focused on delivering
                innovative and efficient automation solutions for industrial and manufacturing sectors.
                Our goal is to help industries enhance productivity, improve operational efficiency,
                and achieve reliable system performance through advanced automation technologies.
              </p>

              <p className="text-lg text-text-muted leading-relaxed">
                We provide a wide range of automation services including PLC programming, HMI and SCADA development,
                AC and servo drive integration, industrial sensor solutions, control panel design, and turnkey
                automation projects. Our team works closely with clients to understand their requirements and
                develop automation systems that are practical, scalable, and cost-effective.
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

       <section className="py-24 bg-muted relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(var(--accent))]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(var(--accent))]/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold tracking-tight mb-4 text-foreground">Our Mission & Vision</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Guided by our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="group relative">
              {/* Animated gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-[hsl(var(--accent))] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-sm" />

              <div className="relative bg-card border border-[hsl(var(--accent))]/30 rounded-2xl p-10 overflow-hidden hover:border-[hsl(var(--accent))] transition-all duration-300">
                {/* Decorative corner pattern */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-bl from-[hsl(var(--accent))]/10 to-transparent rounded-br-full" />
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[hsl(var(--accent))]/10 to-transparent rounded-tl-full" />

                {/* Icon with animated ring */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 w-16 h-16 bg-[hsl(var(--accent))]/20 rounded-xl blur-md group-hover:blur-lg transition-all" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-[hsl(var(--accent))]/20 to-[hsl(var(--accent))]/5 border border-[hsl(var(--accent))]/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Eye
                      className="text-[hsl(var(--accent))] group-hover:-rotate-12 transition-transform duration-300"
                      size={32}
                    />
                  </div>
                </div>

                <h3 className="text-3xl font-semibold mb-4 text-foreground relative">
                  Our Mission
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[hsl(var(--accent))] to-transparent group-hover:w-full transition-all duration-500" />
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
                  To deliver reliable and efficient industrial automation solutions that help businesses improve productivity, reduce operational downtime, and achieve long-term operational excellence.
                </p>

                {/* Number badge */}
                <div className="absolute top-8 right-8 w-8 h-8 rounded-full bg-[hsl(var(--accent))]/10 border border-[hsl(var(--accent))]/30 flex items-center justify-center text-[hsl(var(--accent))] font-bold text-sm">
                  01
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative">
              {/* Animated gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-[hsl(var(--accent))] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-sm" />

              <div className="relative bg-card border border-[hsl(var(--accent))]/30 rounded-2xl p-10 overflow-hidden hover:border-[hsl(var(--accent))] transition-all duration-300">
                {/* Decorative corner pattern */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-bl from-[hsl(var(--accent))]/10 to-transparent rounded-br-full" />
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[hsl(var(--accent))]/10 to-transparent rounded-tl-full" />

                {/* Icon with animated ring */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 w-16 h-16 bg-[hsl(var(--accent))]/20 rounded-xl blur-md group-hover:blur-lg transition-all" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-[hsl(var(--accent))]/20 to-[hsl(var(--accent))]/5 border border-[hsl(var(--accent))]/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Eye
                      className="text-[hsl(var(--accent))] group-hover:-rotate-12 transition-transform duration-300"
                      size={32}
                    />
                  </div>
                </div>

                <h3 className="text-3xl font-semibold mb-4 text-foreground relative">
                  Our Vision
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[hsl(var(--accent))] to-transparent group-hover:w-full transition-all duration-500" />
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
                  To become a trusted automation solutions partner for industries by delivering
                  innovative, scalable, and high-quality automation systems.
                </p>

                {/* Number badge */}
                <div className="absolute top-8 right-8 w-8 h-8 rounded-full bg-[hsl(var(--accent))]/10 border border-[hsl(var(--accent))]/30 flex items-center justify-center text-[hsl(var(--accent))] font-bold text-sm">
                  02
                </div>
              </div>
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
                At Axis Automation & Services, we follow a structured approach to deliver successful
                automation projects. We begin by understanding customer requirements and designing
                customized automation solutions tailored to specific industrial needs.
              </p>

              <p className="text-lg text-text-muted leading-relaxed">
                Our team then implements reliable automation technologies, performs system testing
                and commissioning, and provides ongoing technical support to ensure smooth and
                efficient operations for our clients.
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
                  "Understanding customer requirements",
                  "Designing customized automation solutions",
                  "Implementing reliable automation technologies",
                  "Testing and commissioning systems",
                  "Providing ongoing technical support",
                  "Continuous system optimization and improvement",
                  "Ensuring seamless integration with existing systems",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan flex-shrink-0" />
                    <span className="text-text-muted font-small leading-relaxed text-gray-300">{item}</span>
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
