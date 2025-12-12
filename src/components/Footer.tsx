import { Instagram, Github } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/azibayrn' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/SamuelDonald' },
  ];

  return (
    <footer className="relative bg-tech-green-dark border-t border-tech-green/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-tech-green to-cyan rounded-lg glow-cyan flex items-center justify-center">
                <span className="text-beige font-bold">S</span>
              </div>
              <div>
                <div className="font-bold text-beige">STEJON</div>
                <div className="text-xs text-tan">Integrated Services Ltd.</div>
              </div>
            </div>
            <p className="text-tan text-sm leading-relaxed">
              A Technology-Driven Solutions Company Building Advanced Software Products for the Future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cyan mb-4">Our Focus</h4>
            <ul className="space-y-2 text-tan text-sm">
              <li className="hover:text-cyan transition-colors cursor-pointer">Software Engineering</li>
              <li className="hover:text-cyan transition-colors cursor-pointer">Technology Solutions</li>
              <li className="hover:text-cyan transition-colors cursor-pointer">Logistics Services</li>
              <li className="hover:text-cyan transition-colors cursor-pointer">Construction Projects</li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-cyan mb-4">Connect With Us</h4>
            <div className="flex flex-wrap gap-3 mb-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-tech-green hover:bg-cyan/20 border border-cyan/30 rounded-lg flex items-center justify-center text-cyan glow-cyan-hover transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
              <a
                href="https://twitter.com/AzibaHQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-tech-green hover:bg-cyan/20 border border-cyan/30 rounded-lg flex items-center justify-center text-cyan glow-cyan-hover transition-all duration-300"
                aria-label="Twitter/X - AzibaHQ"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/AzibaTradeLens"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-tech-green hover:bg-cyan/20 border border-cyan/30 rounded-lg flex items-center justify-center text-cyan glow-cyan-hover transition-all duration-300 text-xs"
                aria-label="Twitter/X - TradeLens"
                title="TradeLens"
              >
                TL
              </a>
            </div>
            <p className="text-tan text-sm">
              CEO: <span className="text-cyan">Samuel Aziba.G</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-tech-green/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-tan text-sm">
            © {new Date().getFullYear()} STEJON Integrated Services Limited. All rights reserved.
          </p>
          <div className="flex gap-6 text-tan text-sm">
            <button className="hover:text-cyan transition-colors">Privacy Policy</button>
            <button className="hover:text-cyan transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
