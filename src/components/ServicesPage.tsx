import { Code, Database, Cloud, Smartphone, Globe, Lock, Truck, Package, Building2, Hammer, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const softwareServices = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored applications built with modern frameworks and best practices',
      features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development'],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      features: ['Cloud Migration', 'AWS/Azure/GCP', 'DevOps', 'Microservices'],
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Advanced data processing, analytics, and machine learning solutions',
      features: ['Big Data', 'AI/ML Integration', 'Data Pipelines', 'Analytics Dashboards'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
    },
    {
      icon: Globe,
      title: 'Web3 & Blockchain',
      description: 'Decentralized applications and blockchain solutions',
      features: ['Smart Contracts', 'DApps', 'NFT Platforms', 'Crypto Integration'],
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description: 'Comprehensive security audits and implementation',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Monitoring'],
    },
  ];

  const logisticsServices = [
    {
      icon: Truck,
      title: 'Transportation',
      description: 'Efficient freight and delivery solutions',
    },
    {
      icon: Package,
      title: 'Supply Chain',
      description: 'End-to-end supply chain management',
    },
  ];

  const constructionServices = [
    {
      icon: Building2,
      title: 'Infrastructure',
      description: 'Modern building and infrastructure projects',
    },
    {
      icon: Hammer,
      title: 'Project Management',
      description: 'Comprehensive construction oversight',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 geometric-pattern overflow-hidden">
        <div className="absolute inset-0 gradient-mesh"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-tech-green/30 border border-cyan/30 rounded-full text-cyan text-sm mb-6 glow-cyan">
              Our Services
            </div>
            <h1 className="text-beige mb-6">
              Comprehensive
              <span className="block text-cyan">Technology Solutions</span>
            </h1>
            <p className="text-tan text-lg">
              From cutting-edge software engineering to integrated logistics and construction services
            </p>
          </div>
        </div>
      </section>

      {/* Primary Focus: Software Engineering */}
      <section className="relative py-24 bg-dark-card">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan/20 to-tech-green/20 border border-cyan/30 rounded-full text-cyan text-sm mb-4 glow-cyan">
              <Code size={16} />
              Primary Focus
            </div>
            <h2 className="text-beige mb-4">
              Software Engineering & Technology
            </h2>
            <p className="text-tan text-lg max-w-3xl mx-auto">
              Our core expertise lies in building advanced software products that drive innovation and digital transformation
            </p>
          </div>

          {/* Featured Tech Image */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan/20 to-tech-green/20 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden border border-cyan/30 glow-cyan">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjU1NjQ0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Software Development"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareServices.map((service, index) => (
              <div
                key={index}
                className="group bg-tech-green/20 backdrop-blur-sm border border-cyan/20 rounded-2xl p-6 hover:border-cyan/50 transition-all duration-300 hover:scale-105 glow-cyan-hover"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-tech-green to-cyan rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="text-beige" size={28} />
                </div>
                
                <h3 className="text-beige mb-2">{service.title}</h3>
                <p className="text-tan text-sm mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-cyan text-sm">
                      <div className="w-1 h-1 bg-cyan rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('projects')}
              className="px-8 py-4 bg-gradient-to-r from-cyan to-tech-green text-dark-bg rounded-lg glow-cyan-hover transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              View Our Tech Projects
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Secondary Services: Logistics */}
      <section className="relative py-24 geometric-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-tech-green/30 border border-cyan/30 rounded-full text-cyan text-sm mb-6">
                <Truck size={16} />
                Secondary Services
              </div>
              <h2 className="text-beige mb-4">Logistics Solutions</h2>
              <p className="text-tan mb-8">
                Comprehensive logistics and supply chain management services that ensure efficient operations and timely delivery
              </p>

              <div className="grid gap-4">
                {logisticsServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-dark-card/80 backdrop-blur-sm border border-tech-green/30 rounded-xl p-6 hover:border-cyan/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-tech-green to-cyan/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="text-beige" size={24} />
                    </div>
                    <div>
                      <h4 className="text-beige mb-2">{service.title}</h4>
                      <p className="text-tan text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan/10 to-tech-green/10 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden border border-cyan/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1725449264087-28926bc1a610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBzaGlwcGluZyUyMGNvbnRhaW5lcnN8ZW58MXx8fHwxNzY1NTQ1MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Logistics"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Services: Construction */}
      <section className="relative py-24 bg-dark-card">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan/10 to-tech-green/10 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden border border-cyan/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1650630718105-497674381f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDF8fHx8MTc2NTU2MTk1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Construction"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-tech-green/30 border border-cyan/30 rounded-full text-cyan text-sm mb-6">
                <Building2 size={16} />
                Secondary Services
              </div>
              <h2 className="text-beige mb-4">Construction Services</h2>
              <p className="text-tan mb-8">
                Modern infrastructure development and construction project management with attention to quality and sustainability
              </p>

              <div className="grid gap-4">
                {constructionServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-tech-green/20 backdrop-blur-sm border border-cyan/20 rounded-xl p-6 hover:border-cyan/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-tech-green to-cyan/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="text-beige" size={24} />
                    </div>
                    <div>
                      <h4 className="text-beige mb-2">{service.title}</h4>
                      <p className="text-tan text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-tech-green to-tech-green-dark overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-beige mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-tan text-lg mb-8">
            Let's discuss how our services can address your specific business needs
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-10 py-5 bg-gradient-to-r from-cyan to-tech-green-light text-dark-bg rounded-xl glow-cyan transition-all duration-300 hover:scale-105"
          >
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
}
