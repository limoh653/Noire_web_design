import { Mail, Calendar, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', projectType: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm font-medium mb-4">
            Let's Connect
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Start Your Project Today
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tell us about your vision and let's create something extraordinary together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-sm text-white focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-sm text-white focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-semibold text-gray-300 mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-sm text-white focus:border-amber-500 focus:outline-none transition-colors"
                >
                  <option value="">Select a project type</option>
                  <option value="web-development">Web Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="automation">Workflow Automation</option>
                  <option value="full-stack">Full-Stack Application</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Tell Us About Your Vision
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-sm text-white focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  placeholder="Describe your project goals, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full px-8 py-4 bg-amber-500 text-black font-semibold rounded-sm hover:bg-amber-400 transition-colors disabled:bg-green-500 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>Message Sent Successfully!</>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-sm p-8">
              <h3 className="text-2xl font-bold mb-6">Other Ways to Connect</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email Us</div>
                    <a href="mailto:hello@noireweb.design" className="text-gray-400 hover:text-amber-500 transition-colors">
                      hello@noireweb.design
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Book a Consultation</div>
                    <p className="text-gray-400 mb-2">Schedule a free 15-minute call to discuss your project</p>
                    <button className="text-amber-500 hover:text-amber-400 transition-colors font-semibold">
                      View Available Times →
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <p className="text-gray-400">
                      Remote-first agency<br />
                      Serving clients worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 rounded-sm p-8">
              <h4 className="text-xl font-bold mb-3">What Happens Next?</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold">1.</span>
                  <span>We'll review your inquiry within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold">2.</span>
                  <span>Schedule a discovery call to discuss your vision</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold">3.</span>
                  <span>Receive a detailed proposal with timeline & pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold">4.</span>
                  <span>Start building your dream project together</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
