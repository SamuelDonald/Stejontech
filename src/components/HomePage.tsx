import { ArrowRight, Code, Truck, Building2, Zap, Shield, Cpu } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const secondaryServices = [
    {
      icon: Truck,
      title: 'Logistics',
      description: 'Efficient supply chain and transport solutions',
    },
    {
      icon: Building2,
      title: 'Construction',
      description: 'Modern infrastructure and building projects',
    },
  ];

  const techFeatures = [
    {
      icon: Code,
      title: 'Software Engineering',
      description: 'Custom software solutions built with cutting-edge technology',
    },
    {
      icon: Cpu,
      title: 'AI & Innovation',
      description: 'Leveraging artificial intelligence for future-ready products',
    },
    {
      icon: Shield,
      title: 'Secure & Scalable',
      description: 'Enterprise-grade security with unlimited growth potential',
    },
    {
      icon: Zap,
      title: 'Performance First',
      description: 'Lightning-fast applications optimized for excellence',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden geometric-pattern">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 gradient-mesh"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-tech-green/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-tech-green/30 border border-cyan/30 rounded-full text-cyan text-sm glow-cyan">
              Technology-Driven Innovation
            </div>
            
            <h1 className="text-beige">
              Building Advanced
              <span className="block text-cyan glow-cyan">Software Products</span>
              for the Future
            </h1>

            <p className="text-tan text-lg">
              STEJON Integrated Services Limited is a multi-sector company with primary focus on 
              <span className="text-cyan font-semibold"> Technology & Software Engineering</span>, 
              delivering cutting-edge solutions that drive digital transformation.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('services')}
                className="px-8 py-4 bg-gradient-to-r from-cyan to-tech-green text-dark-bg rounded-lg glow-cyan-hover transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Explore Services
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="px-8 py-4 bg-tech-green/30 border border-cyan/30 text-cyan rounded-lg hover:bg-tech-green/50 transition-all duration-300 flex items-center gap-2"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative float-animation">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan/20 to-tech-green/20 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-3xl overflow-hidden border border-cyan/30 glow-cyan">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1585051256362-eb56bf4d5ea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGNpcmN1aXRzfGVufDF8fHx8MTc2NTU3OTY2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Futuristic Technology"
                className="w-full h-auto"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan/10 border border-cyan/30 rounded-2xl rotate-12 glow-cyan"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-tech-green/20 border border-cyan/20 rounded-2xl -rotate-12"></div>
          </div>
        </div>
      </section>

      {/* Tech Features Section */}
      <section className="relative py-24 bg-dark-card">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-beige mb-4">
              Technology-First Approach
            </h2>
            <p className="text-tan text-lg max-w-3xl mx-auto">
              We leverage the latest technologies to create innovative solutions that solve real-world problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-tech-green/20 backdrop-blur-sm border border-cyan/20 rounded-2xl p-6 hover:border-cyan/50 transition-all duration-300 hover:scale-105 glow-cyan-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-tech-green to-cyan rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="text-beige" size={28} />
                  </div>
                  
                  <h3 className="text-beige mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-tan text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Services Section */}
      <section className="relative py-24 geometric-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-beige mb-4">
              Integrated Services
            </h2>
            <p className="text-tan text-lg">
              Beyond technology, we offer comprehensive solutions across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {secondaryServices.map((service, index) => (
              <div
                key={index}
                className="group bg-dark-card/80 backdrop-blur-sm border border-tech-green/30 rounded-3xl p-8 hover:border-cyan/50 transition-all duration-300 hover:scale-105 glow-cyan-hover"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-tech-green to-cyan/50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="text-beige" size={32} />
                  </div>
                  <div>
                    <h3 className="text-beige mb-3">{service.title}</h3>
                    <p className="text-tan">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-tech-green to-tech-green-dark overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pulse-glow"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-beige mb-6">
            Ready to Build the Future Together?
          </h2>
          <p className="text-tan text-lg mb-8">
            Let's discuss how our technology solutions can transform your business
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-10 py-5 bg-gradient-to-r from-cyan to-tech-green-light text-dark-bg rounded-xl glow-cyan transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}
