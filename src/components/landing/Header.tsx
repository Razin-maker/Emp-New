import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        const offset = window.innerWidth < 768 ? 1 : 100;
        const elementPosition = element.offsetTop;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = ['problem', 'how-it-works', 'open-source'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = window.innerWidth < 768 ? 500 : 100;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className={`bg-secondary/50 border-b border-border/50 transition-all duration-300 overflow-hidden ${
        isScrolled ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'
      }`}>
        <div className="container-calm py-2">
          <a href="https://sohub.com.bd/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 ml-8">
            <img src="/ace41ae7-2ae1-4476-85cf-1d1637a02cb0.png" alt="Solution Hub" className="h-6" />
            <p className="text-[10px] md:text-xs text-muted-foreground">
              Solution Hub Technologies(SOHUB) Owned & Operated
            </p>
          </a>
        </div>
      </div>
      
      {/* Main header */}
      <header className="bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-calm flex items-center justify-between h-12">
        {/* Logo - clickable to home */}
        <Link to="/" className="flex items-center gap-2 relative top-1.5">
          <img src="/Untitled design (8).png" alt="EMP Logo" className="h-24" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#problem" onClick={(e) => handleNavClick(e, 'problem')} className={`transition-colors text-xs ${
            activeSection === 'problem' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
          }`}>
            Problem
          </a>
          <Link to="/solution" className={`transition-colors text-xs ${
            location.pathname === '/solution' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
          }`}>
            Solution
          </Link>
          <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className={`transition-colors text-xs ${
            activeSection === 'how-it-works' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
          }`}>
            How it Works
          </a>
          <Link to="/why-emp-exists" className={`transition-colors text-xs ${
            location.pathname === '/why-emp-exists' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
          }`}>
            Why EMP Exists
          </Link>
          <a href="#open-source" onClick={(e) => handleNavClick(e, 'open-source')} className={`transition-colors text-xs ${
            activeSection === 'open-source' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
          }`}>
            Open Source
          </a>
          <a href="https://www.facebook.com/groups/1381078433708350/?ref=share&mibextid=NSMWBT" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-xs">
            Join Us
          </a>
        </nav>
        
        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://github.com/Employee-Max-Portal/emp-open-source" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <a href="https://demo-emp.sohub.com.bd/" target="_blank" rel="noopener noreferrer">
              Try Demo
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container-calm py-4 flex flex-col gap-4">
            <a 
              href="#problem" 
              className={`transition-colors text-sm py-2 ${
                activeSection === 'problem' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={(e) => handleNavClick(e, 'problem')}
            >
              Problem
            </a>
            <Link 
              to="/solution" 
              className={`transition-colors text-sm py-2 ${
                location.pathname === '/solution' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Solution
            </Link>
            <a 
              href="#how-it-works" 
              className={`transition-colors text-sm py-2 ${
                activeSection === 'how-it-works' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={(e) => handleNavClick(e, 'how-it-works')}
            >
              How it Works
            </a>
            <Link 
              to="/why-emp-exists" 
              className={`transition-colors text-sm py-2 ${
                location.pathname === '/why-emp-exists' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Why EMP Exists
            </Link>
            <a 
              href="#open-source" 
              className={`transition-colors text-sm py-2 ${
                activeSection === 'open-source' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={(e) => handleNavClick(e, 'open-source')}
            >
              Open Source
            </a>
            <a 
              href="https://www.facebook.com/groups/1381078433708350/?ref=share&mibextid=NSMWBT" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Us
            </a>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="ghost" size="sm" className="justify-start" asChild>
                <a href="https://github.com/Employee-Max-Portal/emp-open-source" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
              <Button variant="hero" size="sm" asChild>
                <a href="https://demo-emp.sohub.com.bd/" target="_blank" rel="noopener noreferrer">
                  Try Demo
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
    </div>
  );
};

export default Header;
