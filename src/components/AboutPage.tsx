import { Users, Target, Award, TrendingUp, Lightbulb, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const timeline = [
    { year: '2018', event: 'Company Founded', description: 'STEJON Integrated Services was established' },
    { year: '2019', event: 'Technology Focus', description: 'Pivoted to software engineering and digital solutions' },
    { year: '2021', event: 'Expansion', description: 'Expanded into logistics and construction sectors' },
    { year: '2023', event: 'Innovation Hub', description: 'Launched advanced AI and cloud solutions' },
    { year: '2024', event: 'Global Reach', description: 'Serving clients across multiple continents' },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly pushing boundaries with cutting-edge technology',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Delivering premium quality in every project we undertake',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building strong partnerships with clients and stakeholders',
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'Creating solutions that make a real difference globally',
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
              About STEJON
            </div>
            <h1 className="text-beige mb-6">
              Pioneering the Future of
              <span className="block text-cyan">Technology Solutions</span>
            </h1>
            <p className="text-tan text-lg">
              We are a multi-sector company with a laser focus on technology and software engineering, 
              building innovative solutions that drive digital transformation across industries.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="relative py-24 bg-dark-card">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan/20 to-tech-green/20 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden border border-cyan/30 glow-cyan">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBDRU8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU1Nzk2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="CEO Samuel Aziba.G"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-cyan text-sm mb-2">Leadership</div>
                <h2 className="text-beige mb-2">Samuel Aziba.G</h2>
                <div className="text-tan text-lg mb-4">Chief Executive Officer</div>
              </div>

              <p className="text-tan leading-relaxed">
                Under the visionary leadership of Samuel Aziba.G, STEJON has evolved into a 
                technology-first organization that combines innovation with practical business solutions. 
                His commitment to excellence and forward-thinking approach has positioned the company 
                at the forefront of digital transformation.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-tech-green/30 border border-cyan/20 rounded-xl px-6 py-4">
                  <div className="text-cyan text-2xl font-bold">7+</div>
                  <div className="text-tan text-sm">Years Experience</div>
                </div>
                <div className="bg-tech-green/30 border border-cyan/20 rounded-xl px-6 py-4">
                  <div className="text-cyan text-2xl font-bold">50+</div>
                  <div className="text-tan text-sm">Projects Delivered</div>
                </div>
                <div className="bg-tech-green/30 border border-cyan/20 rounded-xl px-6 py-4">
                  <div className="text-cyan text-2xl font-bold">3</div>
                  <div className="text-tan text-sm">Business Sectors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-24 geometric-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-beige mb-4">Our Journey</h2>
            <p className="text-tan text-lg">Key milestones in our growth story</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan via-tech-green to-cyan hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-dark-card/80 backdrop-blur-sm border border-cyan/20 rounded-2xl p-6 hover:border-cyan/50 transition-all duration-300 glow-cyan-hover">
                      <div className="text-cyan font-bold mb-2">{item.event}</div>
                      <p className="text-tan">{item.description}</p>
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-tech-green to-cyan rounded-full flex items-center justify-center border-4 border-dark-bg glow-cyan">
                      <span className="text-beige font-bold text-lg">{item.year}</span>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 bg-dark-card">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-beige mb-4">Our Core Values</h2>
            <p className="text-tan text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-tech-green/20 backdrop-blur-sm border border-cyan/20 rounded-2xl p-8 text-center hover:border-cyan/50 transition-all duration-300 hover:scale-105 glow-cyan-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-tech-green to-cyan rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="text-beige" size={32} />
                </div>
                <h3 className="text-beige mb-3">{value.title}</h3>
                <p className="text-tan text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-24 bg-gradient-to-br from-tech-green to-tech-green-dark overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-dark-card/50 backdrop-blur-sm border border-cyan/30 rounded-3xl p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan to-tech-green rounded-xl flex items-center justify-center mb-6">
                <Target className="text-beige" size={24} />
              </div>
              <h3 className="text-beige mb-4">Our Mission</h3>
              <p className="text-tan leading-relaxed">
                To deliver innovative, technology-driven solutions that empower businesses to thrive 
                in the digital age, while maintaining excellence across all our service sectors.
              </p>
            </div>

            <div className="bg-dark-card/50 backdrop-blur-sm border border-cyan/30 rounded-3xl p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan to-tech-green rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-beige" size={24} />
              </div>
              <h3 className="text-beige mb-4">Our Vision</h3>
              <p className="text-tan leading-relaxed">
                To become a globally recognized leader in software engineering and integrated services, 
                known for pushing the boundaries of innovation and creating lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
