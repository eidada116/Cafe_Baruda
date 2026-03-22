
import Link from "next/link";
import { FaMugHot } from "react-icons/fa6";

const navItems = [
  { href: "/", label: "Home" , id: "home-btn"},
  { href: "/menu", label: "Menu" , id: "menu-btn"},
  { href: "/pos", label: "POS", id: "pos-btn" },
  { href: "/#about", label: "About" , id: "about-btn"},
  { href: "/#contact", label: "Contact", id: "contact-btn" }
];

const navTestIds: Record<string, string> = {
  "/": "nav-link-home",
  "/menu": "nav-link-menu",
  "/pos": "nav-link-pos",
  "/#about": "nav-link-about",
  "/#contact": "nav-link-contact"
};

export function SiteHeader() {
  return (
    <header className="site-header" data-testid="site-header">
      <div className="container nav-wrap">
        <Link className="brand" data-testid="site-brand-link" href="/">
          <FaMugHot aria-hidden />
          <span>Roast &amp; Bloom</span>
        </Link>
        <nav aria-label="Primary" data-testid="site-nav-primary">
          <ul className="nav-list" data-testid="site-nav-list">
            {navItems.map((item) => (
              <li key={item.href} id={item.id}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
