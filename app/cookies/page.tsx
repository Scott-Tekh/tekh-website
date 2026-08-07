import type { Metadata } from "next";
import { PageFooter, PageHero, SiteHeader } from "../site-chrome";

export const metadata:Metadata={title:"Cookie policy",robots:{index:false,follow:true}};

export default function Cookies(){return <main><SiteHeader/><PageHero eyebrow="Cookies" title={<>Cookie policy<br/><em>awaiting approval.</em></>} intro="This page is reserved for Tekh’s approved cookie policy. Analytics will not be enabled until that wording and the analytics provider have been confirmed."/><section className="legal section-pad"><h2>Document required</h2><p>Please provide the approved cookie and privacy policy file so its wording can be published here without alteration.</p></section><PageFooter/></main>}
