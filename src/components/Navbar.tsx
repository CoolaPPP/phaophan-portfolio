import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Certificates", path: "/certificates" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/80 border-b border-sage shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-espresso hover:text-olive transition-colors">
            Phaophan Photham Portfolio
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors px-3 py-2 rounded-md",
                  location.pathname === item.path
                    ? "text-ivory bg-espresso shadow-md"
                    : "text-olive hover:text-ivory hover:bg-sage"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-espresso hover:text-olive focus:outline-none"
              aria-label="Open menu"
              onClick={() => setMobileOpen((open) => !open)}
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2 bg-ivory rounded-lg shadow-lg mt-2 p-4 border border-sage">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-sm font-medium py-2 px-3 rounded-md transition-colors",
                    location.pathname === item.path
                      ? "text-ivory bg-espresso shadow"
                      : "text-olive hover:text-ivory hover:bg-sage"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;