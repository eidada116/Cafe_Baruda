import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import { getCafeData } from "@/lib/data/menu";
import { formatCurrency } from "@/lib/utils/format";

export default async function HomePage() {
  const { menuItems, categories } = await getCafeData();
  const featured = menuItems.slice(0, 6);

  return (
    <main data-testid="page-home">
      <section className="hero" data-testid="home-hero">
        <div className="container hero-grid">
          <div data-testid="home-hero-copy">
            <p className="eyebrow">Modern neighborhood cafe</p>
            <h1>Crafted coffee, calm space, and an intentionally curated menu.</h1>
            <p className="hero-copy">
              Roast &amp; Bloom blends specialty coffee culture with warm minimalist design. Explore our daily menu and
              find your next favorite cup.
            </p>
            <div className="cta-row" data-testid="home-hero-cta">
              <Link className="btn-primary" data-testid="home-cta-browse-menu" href="/menu">
                Browse Menu
                <FaArrowRightLong aria-hidden />
              </Link>
              <a className="btn-secondary" data-testid="home-cta-visit-us" href="#contact">
                Visit Us
              </a>
            </div>
          </div>
          <div className="hero-media" data-testid="home-hero-media">
            <Image
              alt="Warm coffee and pastry setup"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 42vw"
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80"
            />
          </div>
        </div>
      </section>

      <section className="section" data-testid="home-featured-menu">
        <div className="container">
          <div className="section-head">
            <h2>Featured Menu</h2>
            <p>Selections generated directly from your source dataset.</p>
          </div>
          <div className="menu-grid" data-testid="home-featured-grid">
            {featured.map((item) => (
              <article className="menu-card" data-testid={`home-featured-item-${item.id}`} key={item.id}>
                <header className="menu-card-header">
                  <h3>{item.name}</h3>
                  <p>{formatCurrency(item.price)}</p>
                </header>
                <p className="menu-meta">
                  {item.category} - {item.size}
                </p>
                <p className="menu-sku">{item.sku}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about" data-testid="home-about" id="about">
        <div className="container split">
          <div>
            <h2>About Roast &amp; Bloom</h2>
            <p>
              Our baristas focus on precision and consistency across every drink size and recipe variant. The menu is
              continuously updated from operational data so customers always see current categories and pricing.
            </p>
            <p>
              We pair seasonal ingredients with classic methods to create an inviting cafe experience throughout the
              day.
            </p>
          </div>
          <div className="stats-panel" data-testid="home-about-stats">
            <div data-testid="home-stat-menu-variations">
              <span>{menuItems.length}</span>
              <p>Menu variations</p>
            </div>
            <div data-testid="home-stat-categories">
              <span>{categories.length}</span>
              <p>Primary categories</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact" data-testid="home-contact" id="contact">
        <div className="container">
          <div className="section-head">
            <h2>Contact &amp; Location</h2>
            <p>Open daily for dine-in and takeaway.</p>
          </div>
          <div className="contact-card" data-testid="home-contact-card">
            <p data-testid="home-contact-address">
              <FaLocationDot aria-hidden /> 18 Lancaster Walk, London
            </p>
            <p data-testid="home-contact-hours">Mon-Sat: 07:00 - 17:00</p>
            <p data-testid="home-contact-phone">Phone: +44 20 0000 0000</p>
            <p data-testid="home-contact-email">Email: hello@roastandbloom.co.uk</p>
          </div>
        </div>
      </section>
    </main>
  );
}
