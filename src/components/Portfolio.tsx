import { ExternalLink, TrendingUp, Zap, Users } from 'lucide-react';

const projects = [
  {
    title: "Kemcare",
    category: "Home care platform",
    challenge: "Client needed a secure, real-time online booking dashboard with complex data visualizations and multi-user access control.",
    stack: ["React", "Django", "PostgreSQL", "Redis", "Chart.js"],
    results: [
      { icon: Zap, metric: "60%", label: "Faster Data Processing" },
      { icon: TrendingUp, metric: "85%", label: "User Retention Increase" },
      { icon: Users, metric: "10K+", label: "Active Users" }
    ],
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "https://kemcare.onrender.com" 
  },
  {
    title: "AutomateHub",
    category: "Workflow Automation Platform",
    challenge: "Small business struggled with manual data entry across 5 different tools, losing 15+ hours weekly.",
    stack: ["Python", "n8n", "Supabase", "React", "Tailwind CSS"],
    results: [
      { icon: Zap, metric: "15 hrs", label: "Weekly Time Saved" },
      { icon: TrendingUp, metric: "92%", label: "Error Reduction" },
      { icon: Users, metric: "200+", label: "Automated Workflows" }
    ],
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#" // Add a link here when ready
  },
  {
    title: "Swiper Ventures",
    category: "Real Estate Construction",
    challenge: "Real estate company needed a modern online platform with its portfolio and real-time booking.",
    stack: ["Next.js", "Supabase", "Stripe", "Mapbox", "TypeScript"],
    results: [
      { icon: Zap, metric: "40%", label: "Load Time Reduction" },
      { icon: TrendingUp, metric: "3x", label: "Conversion Rate" },
      { icon: Users, metric: "5K+", label: "Monthly Visitors" }
    ],
    link: "https://swiper-ventures.onrender.com/",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm font-medium mb-4">
            Case Studies
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Results That Speak
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real challenges, innovative solutions, measurable impact
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-sm overflow-hidden hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="text-amber-500 text-sm font-semibold mb-2">{project.category}</div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-amber-500 transition-colors">
                    {project.title}
                  </h3>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">The Challenge</h4>
                    <p className="text-gray-300">{project.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">The Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">The Results</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {project.results.map((result, i) => {
                        const Icon = result.icon;
                        return (
                          <div key={i} className="text-center">
                            <Icon className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white mb-1">{result.metric}</div>
                            <div className="text-xs text-gray-400">{result.label}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* UPDATED LINK SECTION */}
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors group/btn font-semibold"
                    >
                      View Case Study
                      <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}