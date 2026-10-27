import Image from "next/image";

const faqItems = [
  ["How does the free website offer work?", "Tell us about your business and goals. We will review the opportunity with you and show you what a tailored digital presence could look like, with no obligation."],
  ["Can you really deliver in 24 hours?", "Focused landing pages and marketing design packages can be delivered quickly. For more involved digital products, we agree a realistic timeline that protects quality."],
  ["What does 24/7 support mean in practice?", "You have a responsive human point of contact for questions and issues, so you are always clear on what happens next."],
  ["When will smart business systems be available?", "We are shaping this service now. Speak with us to hear about early access as it becomes available."]
];

const serviceSchema = [
  { name: "Websites and digital products", description: "Distinctive, conversion-led websites and web applications for local businesses." },
  { name: "Marketing and print design", description: "Campaigns, leaflets and practical assets designed to earn attention and footfall." },
  { name: "Smart business systems", description: "Business workflow and customer follow-up automation systems." }
];

export default function HomePage() {
  const professionalServiceSchema = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Iverleads", url: "https://iverleads.com", description: "A London digital studio creating websites, marketing design and intelligent digital tools for local businesses.", areaServed: { "@type": "City", name: "London" }, founder: { "@type": "Person", name: "Yousha Tajwar Ibtisum", jobTitle: "Founder & CEO" }, serviceType: serviceSchema.map((service) => service.name) };
  const servicesSchema = { "@context": "https://schema.org", "@graph": serviceSchema.map((service) => ({ "@type": "Service", name: service.name, description: service.description, provider: { "@type": "ProfessionalService", name: "Iverleads", url: "https://iverleads.com" } })) };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <header className="siteHeader container">
      <a className="brand" href="#top" aria-label="Iverleads home"><Image src="/assets/iverleads-submark.png" alt="Iverleads monogram" width={34} height={34} priority /><span>iverleads</span></a>
      <nav aria-label="Primary navigation"><a href="#services">Services</a><a href="#about">About us</a><a href="#faq">FAQ</a><a className="navCta" href="#contact">Let&apos;s talk ↗</a></nav>
    </header>
    <main id="top">
      <section className="hero container" aria-labelledby="hero-title"><div><p className="eyebrow">Digital made personal</p><h1 id="hero-title">Websites with a <em>reason</em> to be remembered.</h1><p className="lede">Iverleads creates considered websites, campaign design and useful digital tools for London businesses ready for their next chapter.</p><div className="actions"><a className="button" href="#contact">Start a conversation ↗</a><a className="quietLink" href="#services">See what we do ↓</a></div></div><div className="mockup" aria-label="Example restaurant website design"><p>Live project · restaurant web experience</p><div className="browser"><span>thebramble.co.uk</span><div><b>BRAMBLE</b><small>MODERN BRITISH DINING · SE1</small><h2>Made slowly.<br />Enjoyed properly.</h2><a href="#services">Discover our kitchen ↗</a></div><i aria-hidden="true"></i></div></div></section>
      <section className="belief"><div className="container twoColumn"><div><p className="eyebrow">What we believe</p><h2>Good digital work should feel <em>like you.</em></h2></div><p>Not a template with your logo dropped in. Just an honest, useful expression of the business you have worked hard to build.</p></div></section>
      <section id="services" className="services" aria-labelledby="services-title"><div className="container"><p className="eyebrow">What we can do for you</p><h2 id="services-title">Built to support the <em>way you grow.</em></h2><div className="serviceGrid">{serviceSchema.map((service, index) => <article className="serviceCard" key={service.name}><span className="serviceIcon" aria-hidden="true">{["⌘", "✦", "◌"][index]}</span><p>0{index + 1} · {index === 0 ? "Web / product" : index === 1 ? "Brand / print" : "Systems / AI"}</p><h3>{service.name}</h3><p>{service.description}</p><a href="#contact" aria-label={`Discuss ${service.name}`}>Explore service ↗</a></article>)}</div></div></section>
      <section id="about" className="about container"><div className="aboutVisual"><Image src="/assets/iverleads-submark.png" alt="Iverleads brand monogram" width={180} height={180} /></div><div><p className="eyebrow">The Iverleads approach</p><h2>Local understanding.<br /><em>Serious ambition.</em></h2><p>We work with owners and teams behind businesses that matter to their communities. We listen closely, speak plainly and create things that work beautifully in the real world.</p><div className="founder"><p className="eyebrow">Founder &amp; CEO</p><h3>Yousha Tajwar Ibtisum</h3><p><b>Computer Science &amp; Artificial Intelligence</b><br />Queen Mary University of London</p></div></div></section>
      <section id="faq" className="faq container" aria-labelledby="faq-title"><div><p className="eyebrow">Good to know</p><h2 id="faq-title">Clear answers.<br /><em>No hard sell.</em></h2></div><div>{faqItems.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>
      <section id="contact" className="contact"><div className="container"><p className="eyebrow">Your next chapter starts here</p><h2>Let&apos;s make something <em>worth talking about.</em></h2><a className="button lightButton" href="mailto:hello@iverleads.com">Get your free website ↗</a></div></section>
    </main>
    <footer><div className="container footerInner"><a className="brand" href="#top"><Image src="/assets/iverleads-submark.png" alt="Iverleads monogram" width={30} height={30} /><span>iverleads</span></a><p>Thoughtful digital experiences for ambitious local businesses.</p><a href="mailto:hello@iverleads.com">hello@iverleads.com</a><small>© 2026 Iverleads. All rights reserved.</small></div></footer>
  </>;
}
