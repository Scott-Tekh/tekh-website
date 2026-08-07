import { PageFooter, PageHero, SiteHeader } from "../site-chrome";

const services = [
  ["01", "Research & discovery", "Make the problem clear before committing to a solution.", "User research / problem framing / technical discovery / responsible AI assessment"],
  ["02", "Data & AI", "Turn complex information into evidence people can understand and use.", "Data science / machine learning / explainable AI / analytics / decision support"],
  ["03", "Automation", "Remove avoidable effort while keeping people in control.", "Process design / workflow automation / intelligent tools / rapid prototypes"],
  ["04", "Software & cloud", "Build secure, dependable products around real operational needs.", "Software engineering / cloud platforms / data pipelines / managed services"],
  ["05", "Design & adoption", "Create tools people trust, understand and choose to use.", "Service design / UX and UI / testing / training / change support"],
];

export default function Services() { return <main><SiteHeader /><PageHero eyebrow="What we do / 01" title={<>The right tool for the <em>real problem.</em></>} intro="We combine research, design and engineering in focused teams. Sometimes the answer is AI. Sometimes it is a dashboard, a workflow or even a better spreadsheet." /><section className="service-list section-pad">{services.map(([n,t,c,tags]) => <article key={n}><span>{n}</span><div><h2>{t}</h2><p>{c}</p></div><small>{tags}</small></article>)}</section><section className="process section-pad"><div className="section-label">Our approach <span>02</span></div><div className="split-heading"><h2>Small steps.<br /><em>Visible value.</em></h2><p className="lead">We work in focused cycles so you see progress early, learn quickly and stay in control of investment.</p></div><div className="process-line"><div><b>Frame</b><span>01</span></div><div><b>Explore</b><span>02</span></div><div><b>Prove</b><span>03</span></div><div><b>Deliver</b><span>04</span></div><div><b>Improve</b><span>05</span></div></div></section><PageFooter /></main> }
