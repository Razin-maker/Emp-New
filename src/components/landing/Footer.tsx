const footerLinks = [
  { label: "Demo", href: "#" },
  { label: "Documentation", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Community", href: "#" },
  { label: "Roadmap", href: "#" },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/30 border-t border-border">
      <div className="container-calm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">E</span>
              </div>
              <span className="font-semibold text-lg text-foreground">EMP</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Employee Max Portal
            </p>
            <p className="text-sm text-muted-foreground">
              Built for Bangladeshi businesses
            </p>
          </div>
          
          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                className="footer-link text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EMP. Open source under MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
