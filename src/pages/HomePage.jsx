import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Accommodations_Home_Overview from '../components/home/Accommodations_Home_Overview';
import Gallery_Home_Overview from '../components/home/Gallery_Home_Overview';
import { ImagesSlider } from '../components/ui/images-slider';
import MetadataManager from '../components/MetaDataManager';

const heroImages = [
  '/homePage/hero/hero1O.webp',
  '/homePage/hero/hero2O.webp',
  '/homePage/hero/hero3O.webp',
  '/homePage/hero/hero4O.webp'
];

const HomePage = () => {
  return (
    <MetadataManager
      title="Dr. Bhoir Farm & Resort | Luxury Farm Stay & Resort in Mumbai"
      canonicalUrl="https://drbhoirfarmandresort.com/"
      description="Experience premium farm stay accommodations, luxury rooms, swimming pool, and nature retreat near Mumbai at Dr. Bhoir Farm & Resort."
    >
      <div>
        <ImagesSlider
          images={heroImages}
          autoplay
          overlay
          overlayClassName="bg-gradient-to-b from-black/10 via-black/20 to-black/30"
        >
          <Hero />
        </ImagesSlider>

        <Features />
        <Accommodations_Home_Overview />
        <Gallery_Home_Overview />
      </div>
    </MetadataManager>
  );
};

export default HomePage;