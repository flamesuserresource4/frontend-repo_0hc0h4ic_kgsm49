import { Menu, Shield } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const NavLink = ({ id, children }) => (
    <button
      onClick={() => scrollTo(id)}
      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
    >
      {children}
    </button>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 grid place-content-center text-white">
              <Shield size={20} />
            </div>
            <span className="font-extrabold tracking-tight text-lg">Logan</span>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <NavLink id="home">Home</NavLink>
            <NavLink id="products">Products</NavLink>
            <NavLink id="features">Why Us</NavLink>
            <NavLink id="testimonials">Reviews</NavLink>
            <button
              onClick={() => scrollTo("contact")}
              className="ml-2 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
            >
              Get a Quote
            </button>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen((s) => !s)} aria-label="Toggle menu">
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              <NavLink id="home">Home</NavLink>
              <NavLink id="products">Products</NavLink>
              <NavLink id="features">Why Us</NavLink>
              <NavLink id="testimonials">Reviews</NavLink>
              <button
                onClick={() => scrollTo("contact")}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 text-sm font-semibold shadow-sm"
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
