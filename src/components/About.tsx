import { Target, Shield, Lightbulb, Users } from 'lucide-react';

const team = [
  {
    name: "Alex Morrison",
    role: "Founder & Lead Developer",
    bio: "Software Engineer with 8+ years building scalable web applications. Specialized in full-stack development and system architecture.",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Jordan Blake",
    role: "UI/UX Designer",
    bio: "Certified UX Designer passionate about creating intuitive interfaces. Background in cognitive psychology and accessibility design.",
    image: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Casey Rivera",
    role: "DevOps Engineer",
    bio: "Infrastructure specialist with expertise in cloud architecture, CI/CD pipelines, and automation. Geospatial Engineering background.",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Every line of code is written with security in mind. We implement industry best practices for data protection and authentication."
  },
  {
    icon: Target,
    title: "User-Centric Design",
    description: "Your users are at the heart of every decision. We design experiences that are intuitive, accessible, and conversion-focused."
  },
  {
    icon: Lightbulb,
    title: "Clean, Maintainable Code",
    description: "We write code that's not just functional, but elegant. Future developers (including you) will thank us for it."
  },
  {
    icon: Users,
    title: "Collaborative Process",
    description: "Your project, your vision. We work closely with you at every stage, ensuring transparency and alignment."
  }
];

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm font-medium mb-4">
            About Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Team Behind Your Success
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A small, dedicated team of specialists committed to delivering exceptional digital experiences
          </p>
        </div>

        <div className="mb-20">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-sm p-8 md:p-12 mb-12">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              At Noire Web Design, we believe that exceptional digital experiences are born from the perfect blend of elegant design and robust engineering. We exist to help businesses transform their digital presence from ordinary to extraordinary.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              We're not just building websites—we're crafting digital ecosystems that drive growth, streamline operations, and create lasting connections with your audience. Every project is an opportunity to push boundaries and deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-sm overflow-hidden hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <div className="text-amber-500 text-sm font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">Our Values</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-sm p-8 hover:border-amber-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
