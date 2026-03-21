import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-3">
              Noire<span className="text-amber-500">.</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Elegant digital experiences engineered for growth. We blend minimalist design with robust full-stack development.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-sm flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-sm flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-sm flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-all"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-amber-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-amber-500 transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">UI/UX Design</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Workflow Automation</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Database Architecture</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Security & Compliance</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Noire Web Design. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
