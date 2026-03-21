import { Code2, Palette, Workflow, Database, Smartphone, Lock } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description: "Specialized backend systems, API integrations, and scalable architectures built with modern frameworks.",
    features: [
      "Full-stack application development",
      "RESTful & GraphQL API design",
      "Third-party integrations",
      "Performance optimization"
    ]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Wireframing and prototyping focused on accessibility, user engagement, and conversion optimization.",
    features: [
      "User research & personas",
      "Interactive prototypes",
      "Responsive design systems",
      "Accessibility compliance (WCAG)"
    ]
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Integrate tools like n8n to streamline business operations and eliminate repetitive manual tasks.",
    features: [
      "Process automation",
      "Custom integrations",
      "Data synchronization",
      "Notification systems"
    ]
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "Robust data modeling and optimization for performance, security, and scalability.",
    features: [
      "Schema design & optimization",
      "Migration strategies",
      "Real-time data systems",
      "Backup & recovery planning"
    ]
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps",
    description: "Fast, reliable web applications that work offline and provide app-like experiences.",
    features: [
      "Offline functionality",
      "Push notifications",
      "App-like performance",
      "Cross-platform compatibility"
    ]
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "Implement industry best practices for data protection, authentication, and regulatory compliance.",
    features: [
      "Security audits",
      "Authentication systems",
      "Data encryption",
      "GDPR & SOC 2 compliance"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm font-medium mb-4">
            Services & Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From concept to deployment, we handle every aspect of your digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-sm p-8 hover:border-amber-500/50 transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className="w-14 h-14 bg-amber-500/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                  <Icon className="w-7 h-7 text-amber-500 group-hover:text-black transition-colors" />
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-500 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 rounded-sm p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Not sure where to start?</h3>
              <p className="text-gray-400 mb-6">
                Book a free 15-minute consultation to discuss your project goals and discover which services align with your vision.
              </p>
              <button className="px-8 py-4 bg-amber-500 text-black font-semibold rounded-sm hover:bg-amber-400 transition-colors">
                Schedule Free Consultation
              </button>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/50 border border-gray-800 rounded-sm p-6">
                  <div className="text-3xl font-bold text-amber-500 mb-2">2-4 weeks</div>
                  <div className="text-sm text-gray-400">Average Project Timeline</div>
                </div>
                <div className="bg-black/50 border border-gray-800 rounded-sm p-6">
                  <div className="text-3xl font-bold text-amber-500 mb-2">100%</div>
                  <div className="text-sm text-gray-400">On-Time Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
