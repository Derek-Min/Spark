import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/login", label: "Login" },
  { to: "/register", label: "Register" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  const adminLinks = [
    { to: "/admin", label: "Dashboard" },
    { to: "/admin/courses", label: "Courses" },
    { to: "/admin/lecturers", label: "Lecturers" },
    { to: "/admin/students", label: "Students" },
    { to: "/admin/materials", label: "Materials" },
  ];

  const links = isAdmin ? adminLinks : navLinks;

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to={isAdmin ? "/admin" : "/"} className="flex items-center gap-2 font-bold text-xl text-primary">
          <GraduationCap className="h-7 w-7 text-accent" />
          <span>EduLearn</span>
          {isAdmin && <span className="ml-1 rounded bg-accent px-2 py-0.5 text-xs font-semibold text-accent-foreground">Admin</span>}
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === l.to
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              {l.label}
            </Link>
          ))}
          {!isAdmin && (
            <Link to="/admin" className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-secondary">
              Admin
            </Link>
          )}
          {isAdmin && (
            <Link to="/" className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-secondary">
              Public Site
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md text-foreground hover:bg-secondary" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-card px-4 pb-4 pt-2 animate-in slide-in-from-top-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium mb-1 ${
                location.pathname === l.to ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
              }`}
            >
              {l.label}
            </Link>
          ))}
          {!isAdmin && (
            <Link to="/admin" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-secondary">
              Admin
            </Link>
          )}
          {isAdmin && (
            <Link to="/" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-secondary">
              Public Site
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
