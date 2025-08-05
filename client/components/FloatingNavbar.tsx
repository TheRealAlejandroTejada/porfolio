import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function FloatingNavbar() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Handle scroll to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-16 opacity-0 scale-95'
      }`}
    >
      <div className="flex items-center gap-1 px-2 py-2 backdrop-blur-xl bg-black/10 border border-white/20 rounded-full shadow-2xl shadow-black/20 hover:shadow-black/30 transition-all duration-300 hover:scale-105">
        <Link 
          to="/" 
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
            isActive("/") 
              ? "bg-white/90 text-black shadow-lg backdrop-blur-sm" 
              : "text-black/80 hover:text-black hover:bg-white/20"
          }`}
        >
          <span className="relative z-10">Home</span>
          {!isActive("/") && (
            <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
          )}
        </Link>
        
        <Link 
          to="/about" 
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
            isActive("/about") 
              ? "bg-white/90 text-black shadow-lg backdrop-blur-sm" 
              : "text-black/80 hover:text-black hover:bg-white/20"
          }`}
        >
          <span className="relative z-10">About</span>
          {!isActive("/about") && (
            <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
          )}
        </Link>
        
        <Link 
          to="/contact" 
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
            isActive("/contact") 
              ? "bg-white/90 text-black shadow-lg backdrop-blur-sm" 
              : "text-black/80 hover:text-black hover:bg-white/20"
          }`}
        >
          <span className="relative z-10">Contact</span>
          {!isActive("/contact") && (
            <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
          )}
        </Link>
      </div>
    </nav>
  );
}
