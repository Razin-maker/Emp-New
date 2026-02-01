import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setIsScrolled(window.scrollY > 10);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top bar */}
      <div className={`bg-secondary/50 border-b border-border/50 transition-all duration-300 overflow-hidden ${
        isScrolled ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'
      }`}>
        <div className="container-calm py-2">
          <a href="https://sohub.com.bd/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 ml-8">
            <img src="/ace41ae7-2ae1-4476-85cf-1d1637a02cb0.png" alt="Solution Hub" className="h-6" />
            <p className="text-xs text-muted-foreground">
              Solution Hub Technologies Owned & Operated
            </p>
          </a>
        </div>
      </div>
      
      {/* Main header */}
      <header className="bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-calm flex items-center justify-between h-12">
        {/* Logo - clickable to home */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/Untitled design (8).png" alt="EMP Logo" className="h-24" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#problem" onClick={(e) => handleNavClick(e, 'problem')} className="text-muted-foreground hover:text-foreground transition-colors text-xs">
            Problem
          </a>
          <Link to="/solution" className="text-muted-foreground hover:text-foreground transition-colors text-xs">
            Solution
          </Link>
          <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="text-muted-foreground hover:text-foreground transition-colors text-xs">
            How it Works
          </a>
          <Link to="/why-emp-exists" className="text-muted-foreground hover:text-foreground transition-colors text-xs">
            Why EMP Exists
          </Link>
          <a href="#open-source" onClick={(e) => handleNavClick(e, 'open-source')} className="text-muted-foreground hover:text-foreground transition-colors text-xs">
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
              className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2"
              onClick={(e) => handleNavClick(e, 'problem')}
            >
              Problem
            </a>
            <Link 
              to="/solution" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solution
            </Link>
            <a 
              href="#how-it-works" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2"
              onClick={(e) => handleNavClick(e, 'how-it-works')}
            >
              How it Works
            </a>
            <Link 
              to="/why-emp-exists" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why EMP Exists
            </Link>
            <a 
              href="#open-source" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2"
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
