import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const featuredProjects = [
    {
      title: 'IronClad Trade Hub',
      description: 'A comprehensive trading platform with advanced analytics and real-time market data integration',
      tags: ['Trading', 'FinTech', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1762279388957-c6ed514d3353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2glMjBuZXR3b3JrfGVufDF8fHx8MTc2NTQ4NjEwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '#',
    },
    {
      title: 'SafeHaven Pawjects',
      description: 'Pet care management system with booking, tracking, and community features',
      tags: ['Web App', 'Community', 'Booking'],
      image: 'https://images.unsplash.com/photo-1585051256362-eb56bf4d5ea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGNpcmN1aXRzfGVufDF8fHx8MTc2NTU3OTY2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '#',
    },
    {
      title: 'Help Texas Rise',
      description: 'Community support platform connecting resources with those in need across Texas',
      tags: ['Community', 'Social Impact', 'Platform'],
      image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjU1NjQ0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '#',
    },
    {
      title: 'TradeLens',
      description: 'Advanced supply chain visibility and blockchain-based trade documentation platform',
      tags: ['Blockchain', 'Supply Chain', 'Enterprise'],
      image: 'https://images.unsplash.com/photo-1725449264087-28926bc1a610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBzaGlwcGluZyUyMGNvbnRhaW5lcnN8ZW58MXx8fHwxNzY1NTQ1MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '#',
    },
  ];

  const githubProjects = [
    {
      title: 'Open Source Contributions',
      description: 'Active contributions to various open-source projects and community initiatives',
      stars: '150+',
      language: 'TypeScript',
    },
    {
      title: 'Development Tools',
      description: 'Custom tools and utilities for developers to improve workflow efficiency',
      stars: '89',
      language: 'JavaScript',
    },
    {
      title: 'Framework Integrations',
      description: 'Integration packages for popular frameworks and libraries',
      stars: '67',
      language: 'React',
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
              Portfolio
            </div>
            <h1 className="text-beige mb-6">
              Our
              <span className="block text-cyan">Featured Projects</span>
            </h1>
            <p className="text-tan text-lg">
              Innovative solutions that showcase our expertise in software engineering and technology
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="relative py-24 bg-dark-card">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-tech-green/20 backdrop-blur-sm border border-cyan/20 rounded-3xl overflow-hidden hover:border-cyan/50 transition-all duration-300 hover:scale-105 glow-cyan-hover"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10"></div>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-beige mb-3">{project.title}</h3>
                  <p className="text-tan text-sm mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-tech-green/50 border border-cyan/30 rounded-full text-cyan text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-cyan hover:text-beige transition-colors"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Projects Section */}
      <section className="relative py-24 geometric-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-tech-green/30 border border-cyan/30 rounded-full text-cyan text-sm mb-6">
              <Github size={16} />
              Open Source
            </div>
            <h2 className="text-beige mb-4">GitHub Projects</h2>
            <p className="text-tan text-lg">
              Explore our open-source contributions and development tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {githubProjects.map((project, index) => (
              <div
                key={index}
                className="bg-dark-card/80 backdrop-blur-sm border border-tech-green/30 rounded-2xl p-6 hover:border-cyan/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <Github className="text-cyan" size={24} />
                  <div className="flex items-center gap-1 text-tan text-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    {project.stars}
                  </div>
                </div>
                
                <h4 className="text-beige mb-2">{project.title}</h4>
                <p className="text-tan text-sm mb-4">{project.description}</p>
                
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan rounded-full"></div>
                  <span className="text-tan text-sm">{project.language}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://github.com/SamuelDonald"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan to-tech-green text-dark-bg rounded-lg glow-cyan-hover transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              View All on GitHub
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-24 bg-dark-card">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-beige mb-4">Technologies We Use</h2>
            <p className="text-tan text-lg">
              Building with the most advanced and reliable technology stack
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker',
              'PostgreSQL', 'MongoDB', 'Redis', 'Kubernetes', 'GraphQL', 'Next.js'
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-tech-green/20 backdrop-blur-sm border border-cyan/20 rounded-xl p-6 text-center hover:border-cyan/50 transition-all duration-300 hover:scale-105 glow-cyan-hover"
              >
                <div className="text-cyan font-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 bg-gradient-to-br from-tech-green to-tech-green-dark overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '30+', label: 'Happy Clients' },
              { number: '150K+', label: 'Lines of Code' },
              { number: '99%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan mb-2 glow-cyan">
                  {stat.number}
                </div>
                <div className="text-tan">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 geometric-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-beige mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-tan text-lg mb-8">
            Let's collaborate to bring your vision to life with cutting-edge technology
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-10 py-5 bg-gradient-to-r from-cyan to-tech-green-light text-dark-bg rounded-xl glow-cyan transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            Start Your Project
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
