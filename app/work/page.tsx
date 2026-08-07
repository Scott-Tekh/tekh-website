import { PageFooter, PageHero, SiteHeader } from "../site-chrome";

const cases = [
  ["Environment / Responsible AI","Faster environmental risk assessment","A human centred AI tool that cut assessment time by 90% while keeping experts in control of the evidence and final decision.","90%","less assessment time"],
  ["Government / Data","Democratising access to complex data","Secure data infrastructure and visual analytics that made important national programme information easier to explore and act on.","1","shared view of the truth"],
  ["Security / Synthetic data","Testing deepfake detection safely","Synthetic video material that protected privacy and enabled independent testing without exposing personally identifiable information.","0","personal data exposed"],
  ["Operations / Automation","Giving repetitive time back to teams","Focused automation designed around the people doing the work. It reduces routine processing and creates room for more valuable decisions.","50%","less repetitive effort"],
];
export default function Work(){return <main><SiteHeader/><PageHero eyebrow="Selected work / 03" title={<>Proof, not<br/><em>promises.</em></>} intro="A selection of the challenges we have helped clients understand, test and solve. Some details are necessarily confidential; the outcomes speak clearly."/><section className="case-list section-pad">{cases.map((c,i)=><article key={c[1]}><div className={`case-art art-${i}`}><div className="data-mark"><i/><i/><i/><i/></div></div><div className="case-copy"><p className="mini-label">{c[0]}</p><h2>{c[1]}</h2><p>{c[2]}</p></div><div className="case-result"><strong>{c[3]}</strong><span>{c[4]}</span></div></article>)}</section><PageFooter/></main>}
