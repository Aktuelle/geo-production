"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Équipe", href: "#equipe" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-geo-black/90 backdrop-blur-sm z-50 px-6 py-4 flex justify-between items-center">
      <Image src="/logo.svg" alt="Geo Production" width={120} height={40} />
      <nav className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-geo-white hover:text-geo-yellow transition-colors uppercase text-sm tracking-wide"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <button
        className="md:hidden text-geo-yellow"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        Menu
      </button>
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-geo-black flex flex-col items-center gap-4 py-6 md:hidden">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-geo-white text-lg">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}