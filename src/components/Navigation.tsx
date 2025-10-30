import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CartSheet from "@/components/CartSheet";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", id: "hero", isHome: true },
    { label: "Shop", id: "shop", route: "/shop" },
    { label: "About", id: "about", isHome: true },
    { label: "Services", id: "skills", isHome: true },
    { label: "Tailoring", id: "tailoring", route: "/tailoring" },
    { label: "Market", id: "projects", isHome: true },
    { label: "Reviews", id: "testimonials", isHome: true },
    { label: "Contact", id: "contact", isHome: true }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div 
            className="font-bold text-lg md:text-xl cursor-pointer text-primary hover:text-accent transition-colors"
            onClick={() => scrollToSection("hero")}
          >
            Beauty Empress Collections
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.route ? (
                <Link
                  key={item.id}
                  to={item.route}
                  className="text-foreground hover:text-accent transition-colors font-medium text-sm"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => {
                    if (location.pathname !== '/') {
                      window.location.href = '/#' + item.id;
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className="text-foreground hover:text-accent transition-colors font-medium text-sm"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <CartSheet />
            
            <Button 
              size="sm"
              className="bg-gradient-accent hover:opacity-90 transition-all duration-300 hidden md:inline-flex"
              onClick={() => scrollToSection("contact")}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;