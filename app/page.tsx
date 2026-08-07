import Link from "next/link";
import { ArrowLink, PageFooter, SiteHeader } from "./site-chrome";
import { sitePath } from "./site-path";

const sectors = [
  { number: "01", title: "Government, defence & security", copy: "Responsible technology for complex, sensitive and critical environments.", href: "/sectors#government" },
  { number: "02", title: "Agrifood", copy: "Better evidence, faster decisions and more resilient systems from field to fork.", href: "/sectors#agrifood" },
  { number: "03", title: "Manufacturing & industry", copy: "Practical data, automation and AI that improve the way work gets done.", href: "/sectors#manufacturing" },
];

const work = [
  { tag: "Responsible AI", title: "Reducing environmental risk assessment time by 90%", result: "90% faster", tone: "pink" },
  { tag: "Data access", title: "Making complex public sector data useful to more people", result: "Clearer decisions", tone: "blue" },
  { tag: "Digital forensics", title: "Building reliable tools for regulated operational teams", result: "Built to assure", tone: "navy" },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero section-pad">
        <div className="eyebrow reveal">Responsible technology consultancy <span>UK / 2026</span></div>
        <div className="hero-grid">
          <div>
            <h1 className="display reveal delay-1">Make complexity<br /><em>useful.</em></h1>
            <p className="hero-copy reveal delay-2">We help ambitious organisations use data, AI and automation to make better decisions, reduce risk and deliver meaningful change.</p>
            <div className="hero-actions reveal delay-3">
              <Link className="button button-primary" href="/contact">Start a conversation <span>↗</span></Link>
              <Link className="text-link" href="/work">Explore our work <span>→</span></Link>
            </div>
          </div>
          <div className="hero-visual hero-video" style={{ backgroundImage: `url(${sitePath("/hero-dual-use-poster.jpg")})` }} aria-label="Dual use technology moving between agriculture and defence">
            <video autoPlay muted loop playsInline preload="metadata" poster={sitePath("/hero-dual-use-poster.jpg")} aria-hidden="true">
              <source src={sitePath("/hero-dual-use.mp4")} type="video/mp4" />
            </video>
            <div className="video-shade" />
            <span className="video-label video-label-bottom">One technology. More than one possibility.</span>
          </div>
        </div>
        <div className="hero-foot"><span>Scroll to explore</span><span className="line" /><span>Independent. Collaborative. Responsible.</span></div>
      </section>

      <section className="proof-strip">
        <div><strong>90%</strong><span>reduction in assessment time</span></div>
        <div><strong>50%</strong><span>less time spent on repetitive work</span></div>
        <div><strong>3</strong><span>sectors where complexity matters</span></div>
        <div><strong>1</strong><span>people focused way of working</span></div>
      </section>

      <section className="section-pad intro-section">
        <div className="section-label">What we do <span>01</span></div>
        <div className="split-heading">
          <h2>Technology should make work <em>clearer</em>, not more complicated.</h2>
          <div>
            <p className="lead">We start with the problem, not the platform. Then we bring together research, design, data science and engineering to build the right response.</p>
            <ArrowLink href="/services">How we work</ArrowLink>
          </div>
        </div>
        <div className="capability-grid">
          <article><span>01</span><h3>Understand</h3><p>Find the real problem, bring the right people together and turn uncertainty into a clear brief.</p></article>
          <article><span>02</span><h3>Prove</h3><p>Test ideas quickly, visibly and responsibly before investing in a full solution.</p></article>
          <article><span>03</span><h3>Build</h3><p>Create secure, explainable tools that fit the people, systems and decisions around them.</p></article>
          <article><span>04</span><h3>Improve</h3><p>Measure what matters, learn from real use and keep creating value after launch.</p></article>
        </div>
      </section>

      <section className="dark-section section-pad">
        <div className="section-label light">Where we work <span>02</span></div>
        <div className="split-heading light">
          <h2>Built for sectors where the <em>details matter.</em></h2>
          <p className="lead">Different environments. The same need for evidence, trust and practical results.</p>
        </div>
        <div className="sector-list">
          {sectors.map((sector) => (
            <Link href={sector.href} key={sector.title} className="sector-row">
              <span>{sector.number}</span><h3>{sector.title}</h3><p>{sector.copy}</p><b>↗</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-pad work-section">
        <div className="section-label">Selected work <span>03</span></div>
        <div className="split-heading">
          <h2>Real work.<br /><em>Measurable impact.</em></h2>
          <div><p className="lead">From early research to operational delivery, we make progress visible and value tangible.</p><ArrowLink href="/work">View all work</ArrowLink></div>
        </div>
        <div className="work-grid">
          {work.map((item) => <article className={`work-card ${item.tone}`} key={item.title}><div className="work-card-top"><span>{item.tag}</span><b>↗</b></div><div className="case-placeholder" aria-hidden="true"><i /><i /><i /></div><h3>{item.title}</h3><p>{item.result}</p></article>)}
        </div>
      </section>

      <section className="manifesto section-pad">
        <div className="manifesto-kicker">Our point of view</div>
        <blockquote>“The best technology doesn’t ask people to trust a black box. It gives them the clarity and confidence to act.”</blockquote>
        <div className="manifesto-foot"><span>Responsible by design.</span><span>Useful by default.</span><span>Built together.</span></div>
      </section>

      <section className="cta section-pad"><p>Have a complex challenge?</p><h2>Let’s make it <em>useful.</em></h2><Link className="button button-light" href="/contact">Start a conversation <span>↗</span></Link></section>
      <PageFooter />
    </main>
  );
}
