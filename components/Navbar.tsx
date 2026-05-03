"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "UVP", href: "#uvp" },
  { label: "Workflow", href: "#workflow" },
  { label: "Benchmarking", href: "#benchmarking" },
  { label: "Business Challenges", href: "#challenges" },
  { label: "Demo", href: "#demo" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-blue-100" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center shadow-md">
              <span className="text-white font-black text-sm tracking-tight">F</span>
            </div>
            <div>
              <span className="font-black text-[var(--navy)] text-lg tracking-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                FARS
              </span>
              <span className="hidden sm:inline text-xs text-blue-500 font-medium ml-1.5 bg-blue-50 px-1.5 py-0.5 rounded">
                v1.0
              </span>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#demo" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
              Lihat Demo
            </a>
            <a
              href="#kontak"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-all hover:-translate-y-0.5 shadow-md shadow-blue-200"
            >
              Hubungi Kami →
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-slate-200 shadow-lg px-5 py-4 flex flex-col gap-3 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 font-medium text-slate-700 border-b border-slate-100 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontak"
            onClick={() => setOpen(false)}
            className="mt-2 bg-blue-600 text-white text-center font-semibold py-3 rounded-xl"
          >
            Hubungi Kami
          </a>
        </div>
      )}
    </>
  );
}
