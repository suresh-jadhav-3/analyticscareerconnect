
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  let dropdownTimer;

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimer);
    setIsProgramsOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimer = setTimeout(() => setIsProgramsOpen(false), 200);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-lg" 
          : "bg-white/50 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <img
              src="https://analyticscareerconnect.com/wp-content/uploads/2025/01/Logs-ACC-removebg-preview-e1737796458429.png"
              alt="analyticscareerconnect"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={` ${isActive("/") ? "text-blue-600 font-semibold" : ""}`}>Home</Link>
            
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="flex items-center gap-1 cursor-pointer">
                <Link to='/program' className={`${isActive("/program") ? "text-blue-600 font-semibold" : ""}`}>Programs</Link>
                {isProgramsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </span>

              <div className={`absolute left-0 top-full pt-2 w-56 transition-all duration-200 ${
                isProgramsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
              }`}>
                <div className="p-3 bg-white shadow-xl border border-gray-100">
                  <Link to="/mentorship-program" className="dropdown-item block py-2">Mentorship Program</Link>
                  <Link to="/internship-program" className="dropdown-item block py-2">Internship Program</Link>
                  <Link to="/job-assistance-program" className="dropdown-item block py-2">Job Assistance</Link>
                </div>
              </div>
            </div>

            {['/about', '/contact', '/service', '/blog', '/career'].map((path) => (
              <Link key={path} to={path} className={`nav-link ${isActive(path) ? "text-blue-600 font-semibold" : ""}`}>{path.slice(1).charAt(0).toUpperCase() + path.slice(2)}</Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden relative z-10 p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden fixed  right-0 w-3/4 h-screen bg-white shadow-lg z-50 flex flex-col space-y-4 py-4 px-6">
            
            <Link to="/" onClick={() => setIsOpen(false)} className={isActive("/") ? "text-blue-600 font-semibold" : ""}>Home</Link>

            {/* Programs Dropdown for Mobile */}
            <div>
              <div className="flex justify-between items-center" onClick={() => setIsProgramsOpen(!isProgramsOpen)}>
                <Link to="/program" onClick={() => setIsOpen(false)} className={isActive("/program") ? "text-blue-600 font-semibold" : ""}>Programs</Link>
                {isProgramsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
              {isProgramsOpen && (
                <div className="pl-4 mt-2">
                  <Link to="/mentorship-program" onClick={() => setIsOpen(false)} className="block py-2">Mentorship Program</Link>
                  <Link to="/internship-program" onClick={() => setIsOpen(false)} className="block py-2">Internship Program</Link>
                  <Link to="/job-assistance-program" onClick={() => setIsOpen(false)} className="block py-2">Job Assistance</Link>
                </div>
              )}
            </div>

            {['/about', '/contact', '/service', '/blog', '/career'].map((path) => (
              <Link key={path} to={path} onClick={() => setIsOpen(false)} className={isActive(path) ? "text-blue-600 font-semibold" : ""}>{path.slice(1).charAt(0).toUpperCase() + path.slice(2)}</Link>
            ))}

          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
