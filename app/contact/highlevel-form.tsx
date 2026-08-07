import Script from "next/script";

export default function HighLevelForm(){
  return <div className="crm-embed">
    <iframe
      src="https://link.tomcrm.co.uk/widget/form/i6hxFZGeSiPldTPYKXSW"
      style={{width:"100%",height:"920px",border:"none",borderRadius:"3px"}}
      id="inline-i6hxFZGeSiPldTPYKXSW"
      data-layout='{"id":"INLINE"}'
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Website Enquiry - Scott Edit"
      data-height="920"
      data-layout-iframe-id="inline-i6hxFZGeSiPldTPYKXSW"
      data-form-id="i6hxFZGeSiPldTPYKXSW"
      title="Website Enquiry - Scott Edit"
    />
    <Script src="https://link.tomcrm.co.uk/js/form_embed.js" strategy="afterInteractive" />
  </div>;
}
