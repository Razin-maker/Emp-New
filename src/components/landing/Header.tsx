import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-calm flex items-center justify-between h-16">
        {/* Logo - clickable to home */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">E</span>
          </div>
          <span className="font-semibold text-lg text-foreground">EMP</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Problem
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            How it Works
          </a>
          <Link to="/why-emp-exists" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Why EMP Exists
          </Link>
          <a href="#open-source" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Open Source
          </a>
        </nav>
        
        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">
            GitHub
          </Button>
          <Button variant="hero" size="sm">
            Try Demo
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
              onClick={() => setMobileMenuOpen(false)}
            >
              Problem
            </a>
            <a 
              href="#how-it-works" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2"
              onClick={() => setMobileMenuOpen(false)}
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
              onClick={() => setMobileMenuOpen(false)}
            >
              Open Source
            </a>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="ghost" size="sm" className="justify-start">
                GitHub
              </Button>
              <Button variant="hero" size="sm">
                Try Demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
