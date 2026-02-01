const footerLinks = [
  { label: "Demo", href: "https://demo-emp.sohub.com.bd/" },
  { label: "Documentation", href: "https://github.com/Employee-Max-Portal/emp-open-source/wiki" },
  { label: "GitHub", href: "https://github.com/Employee-Max-Portal/emp-open-source" },
  { label: "Join Us", href: "https://www.facebook.com/groups/1381078433708350/?ref=share&mibextid=NSMWBT" },
  { label: "Roadmap", href: "#future" },
];

const Footer = () => {
  return (
    <footer className="py-8 bg-secondary/30 border-t border-border">
      <div className="container-calm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <img src="/Untitled design (8).png" alt="EMP Logo" className="h-24" />
            </div>
            <p className="text-sm text-muted-foreground">
              Employee Max Portal
            </p>
          </div>
          
          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="footer-link text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EMP(Employee Max Portal)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
