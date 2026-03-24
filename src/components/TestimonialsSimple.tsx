import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    company: 'TechFlow Solutions',
    position: 'CEO & Founder',
    text: "Working with this team transformed our online presence completely. They didn't just build a website - they crafted a digital experience that resonates with our customers.",
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'Horizon Consulting',
    position: 'Marketing Director',
    text: 'Exceptional attention to detail and creative vision. They took time to understand our brand identity and delivered a website that exceeded all expectations.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'GreenLeaf Organics',
    position: 'Founder',
    text: "The best investment we made for our business. The team's expertise in modern web technologies resulted in a stunning, fast-loading website.",
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 4,
    name: 'James Patterson',
    company: 'Velocity Fitness',
    position: 'Operations Manager',
    text: 'From concept to completion, the entire process was smooth and professional. They handled everything with precision and expertise.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    company: 'Artisan Bakery Co.',
    position: 'Owner',
    text: "These folks are wizards! They created a beautiful, modern website that perfectly captures our brand's warmth and authenticity.",
    rating: 5,
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 6,
    name: 'David Kim',
    company: 'Summit Real Estate',
    position: 'Senior Partner',
    text: 'Outstanding work from start to finish. They built us a powerful platform with advanced features that our team loves.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section - Matched to Services */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm font-medium mb-4">
            Client Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-amber-500">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real feedback from real businesses we've helped grow.
          </p>
        </div>

        {/* Testimonials Grid - Matched Card Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-sm p-8 hover:border-amber-500/50 transition-all duration-300 hover:translate-y-[-4px]"
            >
              <Quote className="w-8 h-8 text-amber-500 mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />

              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-sm object-cover border border-gray-800 group-hover:border-amber-500 transition-colors"
                />

                <div>
                  <h3 className="font-bold text-white group-hover:text-amber-500 transition-colors">
                    {testimonial.name}
                  </h3>
                  <div className="flex gap-1 mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-gray-500 text-xs">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Story CTA - Matched to Services CTA */}
        <div className="mt-16 bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 rounded-sm p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Success Story?</h3>
              <p className="text-gray-400 mb-6">
                Join dozens of satisfied clients who've transformed their digital presence with us.
              </p>
              
              <button
                className="px-8 py-4 bg-amber-500 text-black font-semibold rounded-sm hover:bg-amber-400 active:scale-95 transition-all shadow-lg shadow-amber-500/10"
              >
                Get Started Today
              </button>
            </div>
            
            <div className="hidden md:block opacity-20">
              <Quote className="w-32 h-32 text-amber-500 ml-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}