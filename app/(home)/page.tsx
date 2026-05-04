import HeroSection from "../components/hero/HeroSection";

const Home = () => {
    return (
        <div>
          <HeroSection 
            titleLine1="We Create"
            titleLine2Left="Category"
            titleLine2Right="Leaders"
            subtitle="on every searchable platform"
            backgroundImage="/images/heroImg.webp"
            centerImage="/images/heroImg.webp"
            leftText="Organic media planners creating, distributing & optimising search-first content for SEO, Social, PR, AI and LLM search"
            rightText="4 Global Offices serving UK, USA (New York) & EU"
          />
        </div>
    )
}

export default Home;