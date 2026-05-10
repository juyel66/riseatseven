import DrivingDemand from "../components/DrivingDemand/DrivingDemand";
import OurService from "../components/OurService/OurService";
import SendYourBrief from "../components/SendYourBreif/SendYourBrief";
import Agency from "../components/TheAgencyBehindSection/TheAgencyBehindSection";
import HeroSection from "../components/hero/HeroSection";

const agencyItems = [
  {
    id: 1,
    logo: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="220" height="80" viewBox="0 0 220 80"><rect width="220" height="80" rx="18" fill="white"/><text x="110" y="50" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#111827">NOVA</text></svg>'
    )}`,
  },
  {
    id: 2,
    logo: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="220" height="80" viewBox="0 0 220 80"><rect width="220" height="80" rx="18" fill="white"/><text x="110" y="50" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#111827">ATLAS</text></svg>'
    )}`,
  },
  {
    id: 3,
    logo: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="220" height="80" viewBox="0 0 220 80"><rect width="220" height="80" rx="18" fill="white"/><text x="110" y="50" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#111827">LUMEN</text></svg>'
    )}`,
  },
  {
    id: 4,
    logo: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="220" height="80" viewBox="0 0 220 80"><rect width="220" height="80" rx="18" fill="white"/><text x="110" y="50" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#111827">NORTH</text></svg>'
    )}`,
  },
];


const Home = () => {
  return (
    <div className="bg-white">
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


      <Agency items={agencyItems} />
      <div>
        <DrivingDemand />
      </div>
      <OurService />
      <SendYourBrief />
    </div>
  );
};

export default Home;