import Link from "next/link";
import { FaMugHot } from "react-icons/fa6";

const navItems = [
  { href: "/", label: "Home", id: "home-btn" },
  { href: "/menu", label: "Menu" , id: "menu-btn"},
  { href: "/pos", label: "POS" , id: "pos-btn"},
  { href: "/#about", label: "About", id: "about-btn" },
  { href: "/#contact", label: "Contact", id: "contact-btn" }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/">
          <FaMugHot aria-hidden />
          <span>Roast &amp; Bloom</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} id={item.id}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
