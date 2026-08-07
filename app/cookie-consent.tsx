"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Consent="essential"|"analytics";

export default function CookieConsent(){
  const [choice,setChoice]=useState<Consent|null>(null);
  const [ready,setReady]=useState(false);

  useEffect(()=>{
    const saved=window.localStorage.getItem("tekh-cookie-consent") as Consent|null;
    setChoice(saved);
    setReady(true);
  },[]);

  function choose(value:Consent){
    window.localStorage.setItem("tekh-cookie-consent",value);
    setChoice(value);
    window.dispatchEvent(new CustomEvent("tekh-consent-change",{detail:value}));
  }

  if(!ready||choice)return null;

  return <aside className="cookie-banner" aria-label="Cookie choices"><div><strong>Your privacy choices</strong><p>We use essential storage to remember your preferences. Analytics are not active yet. When they are added, we will only enable them with your permission.</p><Link href="/cookies">Read our cookie policy</Link></div><div className="cookie-actions"><button onClick={()=>choose("essential")}>Essential only</button><button className="button button-primary" onClick={()=>choose("analytics")}>Save analytics choice</button></div></aside>;
}
