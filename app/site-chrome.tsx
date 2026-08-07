import Link from "next/link";
import type { ReactNode } from "react";
import { sitePath } from "./site-path";

export function Logo() {
  return <Link href="/" className="logo" aria-label="Tekh home"><img src={sitePath("/tekh-logo.svg")} alt="Tekh" /></Link>;
}

export function SiteHeader() {
  return <header className="site-header"><Logo /><nav className="desktop-nav" aria-label="Main navigation"><Link href="/services">What we do</Link><Link href="/sectors">Sectors</Link><Link href="/work">Work</Link><Link href="/ai-readiness">AI Readiness</Link><Link href="/about">About</Link><Link href="/blog">Blog</Link></nav><Link className="header-cta" href="/contact">Let’s talk <span>↗</span></Link><details className="mobile-menu"><summary aria-label="Open menu"><span /><span /></summary><nav><Link href="/services">What we do</Link><Link href="/sectors">Sectors</Link><Link href="/work">Work</Link><Link href="/ai-readiness">AI Readiness</Link><Link href="/about">About</Link><Link href="/blog">Blog</Link><Link href="/contact">Contact</Link></nav></details></header>;
}

export function PageFooter() {
  return <><PartnerMarquee/><footer className="footer section-pad"><div className="footer-top"><Logo /><p>Explaining the complex.<br />Empowering the future.</p><div><span>Explore</span><Link href="/services">What we do</Link><Link href="/work">Our work</Link><Link href="/ai-readiness">AI Readiness</Link><Link href="/blog">Blog</Link><Link href="/about">About Tekh</Link></div><div><span>Connect</span><Link href="/contact">Contact</Link><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:info@tekh.co.uk">info@tekh.co.uk</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Tekh Limited</span><div><Link href="/privacy">Privacy</Link><Link href="/cookies">Cookies</Link><span>Built with purpose in the UK</span></div></div></footer></>;
}

function PartnerMarquee(){
  const labels=["Government","Research","Agrifood","Defence","Manufacturing","Academia"];
  return <section className="partner-marquee" aria-label="Our partner network"><div className="partner-title">Working across</div><div className="partner-track">{[...labels,...labels].map((label,index)=><span key={`${label}-${index}`}><i aria-hidden="true"/>{label}</span>)}</div></section>;
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link className="arrow-link" href={href}>{children}<span>↗</span></Link>;
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro: string }) {
  return <section className="page-hero section-pad"><div className="eyebrow">{eyebrow}<span>TEKH / UK</span></div><div className="page-hero-grid"><h1>{title}</h1><p className="lead">{intro}</p></div></section>;
}
