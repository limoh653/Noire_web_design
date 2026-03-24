import { Mail, Calendar, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://noire-backend.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: '', email: '', projectType: '', message: '' });

        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
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

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 text-white"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 text-white"
            />

            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 text-white"
            >
              <option value="">Select Project Type</option>
              <option value="web-development">Web Development</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="automation">Automation</option>
              <option value="full-stack">Full Stack</option>
              <option value="consultation">Consultation</option>
            </select>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 text-white"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full px-6 py-4 bg-amber-500 text-black font-semibold flex justify-center items-center gap-2"
            >
              {status === "loading" && "Sending..."}
              {status === "success" && "Message Sent ✅"}
              {status === "error" && "Error ❌ Try Again"}
              {status === "idle" && (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>

          </form>

          {/* CONTACT + BOOKING */}
          <div className="space-y-8">

            <div className="border border-gray-800 p-8">
              <h3 className="text-2xl font-bold mb-6">Other Ways to Connect</h3>

              {/* EMAIL */}
              <div className="flex gap-4 mb-6">
                <Mail className="text-amber-500" />
                <a href="mailto:limohesbon7@gmail.com" className="text-gray-400 hover:text-amber-500">
                  limohesbon7@gmail.com
                </a>
              </div>

              {/* BOOKING */}
              <div className="flex gap-4 mb-6">
                <Calendar className="text-amber-500" />
                <div>
                  <p className="font-semibold">Book a Consultation</p>
                  <p className="text-gray-400 text-sm mb-2">
                    Choose a time that works for you
                  </p>

                  <a
                    href="https://calendar.app.google/vTRCx4KbQUHuo6be6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 hover:text-amber-400 font-semibold"
                  >
                    View Available Times →
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex gap-4">
                <MapPin className="text-amber-500" />
                <p className="text-gray-400">
                  Remote-first <br /> Worldwide
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}