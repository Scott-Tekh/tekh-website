import { PageFooter, SiteHeader } from "../site-chrome";
import HighLevelForm from "./highlevel-form";

export default function Contact(){return <main><SiteHeader/><section className="contact-page section-pad"><div><div className="eyebrow">Contact / 06 <span>TEKH / UK</span></div><h1>Bring us the<br/><em>difficult question.</em></h1><p className="lead">Tell us what you are trying to change. You do not need a technical brief. We can work out the right starting point together.</p><a href="mailto:info@tekh.co.uk" className="contact-email">info@tekh.co.uk <span>↗</span></a></div><HighLevelForm/></section><PageFooter/></main>}
