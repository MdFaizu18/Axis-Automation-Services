import { Target, Eye, Award, Users } from "lucide-react"

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary mb-4">About Us</h1>
          <p className="text-lg text-text-muted max-w-3xl">
            Delivering excellence in industrial automation and control solutions
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight mb-6">Who We Are</h2>
              <p className="text-text-muted leading-relaxed mb-4">
                We are a dedicated industrial automation and services company providing reliable, efficient, and
                customized automation solutions for a wide range of industrial applications.
              </p>
              <p className="text-text-muted leading-relaxed">
                Our expertise spans PLC automation, HMI systems, AC and servo drives, industrial sensors, PLC control
                panels, and complete turnkey projects. With a focus on quality and customer satisfaction, we deliver
                solutions that drive operational excellence.
              </p>
            </div>
            <div className="bg-muted rounded-lg overflow-hidden">
              <img src="/industrial-automation-facility.jpg" alt="About Us" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-text-muted leading-relaxed">
                To empower industries with cutting-edge automation solutions that enhance productivity, ensure
                reliability, and foster sustainable growth through innovation and excellence.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                <Eye className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-text-muted leading-relaxed">
                To be the most trusted partner in industrial automation, recognized for our technical expertise,
                customer-centric approach, and commitment to delivering world-class automation solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach & Expertise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
                  <Award className="text-primary" size={20} />
                </div>
                <h2 className="text-2xl font-semibold">Our Approach</h2>
              </div>
              <p className="text-text-muted leading-relaxed mb-6">
                We believe in understanding customer requirements in depth and delivering practical, scalable, and
                cost-effective automation solutions.
              </p>
              <p className="text-text-muted leading-relaxed">
                Our team works closely with clients throughout the project lifecycle, from initial consultation and
                design to implementation, testing, and ongoing support. We ensure seamless integration with existing
                systems while maintaining the highest standards of quality and safety.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
                  <Users className="text-primary" size={20} />
                </div>
                <h2 className="text-2xl font-semibold">Our Expertise</h2>
              </div>
              <ul className="space-y-3">
                {[
                  "PLC programming and integration",
                  "HMI design and visualization",
                  "AC & servo drives configuration",
                  "Industrial sensor selection and calibration",
                  "PLC control panel design and fabrication",
                  "Turnkey automation project execution",
                  "System upgrades and modernization",
                  "Technical training and support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Why Partner With AutomationTech?</h2>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-12">
            We combine technical excellence with a customer-first mindset to deliver automation solutions that truly
            make a difference.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Excellence",
                description: "Certified engineers with deep expertise in industrial automation technologies",
              },
              {
                title: "Reliable Support",
                description: "Prompt after-sales service and technical support whenever you need it",
              },
              {
                title: "Proven Track Record",
                description: "Successfully delivered automation projects across multiple industries",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-primary-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
