
import Link from "next/link";
import { FaMugHot } from "react-icons/fa6";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/pos", label: "POS" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" }
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
              <li key={item.href} data-testid={navTestIds[item.href] ?? `nav-link-${item.href.replace(/[^\w-]/g, "")}`}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
