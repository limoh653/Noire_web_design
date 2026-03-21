import { ArrowRight, MousePointer2 } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-black text-white flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-800/20 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm font-medium mb-6">
              Premium Web Solutions
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Elegant Digital<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Experiences,
              </span><br />
              <span className="text-amber-500">Engineered</span> for Growth
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-xl">
              We blend minimalist design with robust full-stack development to build high-performance web applications that convert visitors into lifelong customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-4 bg-amber-500 text-black font-semibold rounded-sm hover:bg-amber-400 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-4 border border-gray-700 text-white font-semibold rounded-sm hover:border-amber-500 hover:text-amber-500 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Our Portfolio
                <MousePointer2 size={20} />
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
              <div>
                <div className="text-3xl font-bold text-amber-500 mb-1">50+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-500 mb-1">98%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-500 mb-1">40%</div>
                <div className="text-sm text-gray-400">Avg. Performance Boost</div>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-sm p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="space-y-3 font-mono text-sm">
                <div className="text-gray-500">// Premium web experiences</div>
                <div className="text-amber-500">const <span className="text-white">agency</span> = {'{'}
                </div>
                <div className="pl-4 text-gray-400">
                  name: <span className="text-green-400">"Noire Web Design"</span>,
                </div>
                <div className="pl-4 text-gray-400">
                  focus: <span className="text-green-400">"Conversion-driven"</span>,
                </div>
                <div className="pl-4 text-gray-400">
                  stack: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"Django"</span>, <span className="text-green-400">"Supabase"</span>],
                </div>
                <div className="pl-4 text-gray-400">
                  performance: <span className="text-blue-400">100</span>
                </div>
                <div className="text-amber-500">{'}'}</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-full h-full bg-amber-500/20 rounded-sm -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
