import type { Metadata } from "next";
import { PageFooter, PageHero, SiteHeader } from "../site-chrome";

export const metadata:Metadata={title:"Blog",description:"Ideas and practical guidance from Tekh on responsible AI, data, automation and digital change."};

const posts=[
  {topic:"Responsible AI",title:"How to find real value in a market full of AI promises",summary:"A practical way to separate worthwhile opportunities from noise and avoid starting with the technology."},
  {topic:"Data",title:"Explainability is an operational advantage",summary:"Clear evidence helps people trust decisions, challenge assumptions and act with confidence."},
  {topic:"Agrifood",title:"Turning complex field data into clearer choices",summary:"How connected evidence can support more resilient, informed decisions across agrifood systems."},
  {topic:"Automation",title:"Start by understanding the work",summary:"The most useful automation removes friction without removing the judgement that matters."},
];

export default function Blog(){return <main><SiteHeader/><PageHero eyebrow="Blog" title={<>Thinking clearly about<br/><em>useful technology.</em></>} intro="Ideas, field notes and practical guidance from the people working on complex problems at Tekh."/><section className="blog-list section-pad"><div className="blog-intro"><p>Publishing soon</p><h2>Useful thinking,<br/>without the hype.</h2></div>{posts.map((post,index)=><article key={post.title}><div className={`blog-art blog-art-${index}`}><i/><i/><i/></div><div><p className="mini-label">{post.topic}</p><h3>{post.title}</h3><p>{post.summary}</p><span>Article in preparation</span></div></article>)}</section><PageFooter/></main>}
