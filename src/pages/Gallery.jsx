import { Link } from "react-router";
import { ArrowRight, Instagram } from "lucide-react";

import MetadataManager from "../components/MetaDataManager";
import TabbedGallery from "../components/TabbedGallery";

const Gallery = () => {
  return (
    <MetadataManager
      title="Gallery | Dr. Bhoir Farm & Resort"
      description="Explore photos of accommodations, amenities, activities, events and memorable experiences at Dr. Bhoir Farm & Resort near Kalyan and Badlapur."
      canonicalUrl="https://drbhoirfarmandresort.com/gallery"
      breadcrumbs={[
        {
          name: "Home",
          url: "https://drbhoirfarmandresort.com/",
        },
        {
          name: "Gallery",
          url: "https://drbhoirfarmandresort.com/gallery",
        },
      ]}
    >
      <main className="pt-16">
        <section className="relative min-h-[320px] h-[40vh] overflow-hidden">
          <img
            src="/gallery/galleryTitleO.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 flex h-full items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Our Gallery
            </h1>
          </div>
        </section>

        <TabbedGallery />

        <section className="py-12 flex flex-col items-center gap-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-cta text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Plan Your Visit
            <ArrowRight className="h-5 w-5" />
          </Link>

          <hr className="h-0.5 w-full bg-cta border-0" />
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="font-semibold text-lg text-center sm:text-left">
            Discover more moments and updates on our Instagram page.
          </h2>

          <a
            href="https://www.instagram.com/drbhoirfarm/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-insta px-5 py-3 text-white font-semibold hover:bg-insta/90 transition-colors"
          >
            <Instagram aria-hidden="true" />
            Follow us on Instagram
          </a>
        </section>
      </main>
    </MetadataManager>
  );
};

export default Gallery;
