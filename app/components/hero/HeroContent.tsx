import HeroSection from "./HeroSection";


export default function HeroContent() {
  return (
    <main>
      <HeroSection
        titleLine1="We Create"
        titleLine2Left="Category"
        titleLine2Right="Leaders"
        subtitle="on every searchable platform"
        backgroundImage="/hero-bg.jpg"
        centerImage="/can.png"
        leftText="Organic media planners creating, distributing & optimising search-first content for SEO, Social, PR, AI and LLM search"
        rightText="4 Global Offices serving UK, USA (New York) & EU"
      />
    </main>
  );
}