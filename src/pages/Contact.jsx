import WhatsAppInquiry from "../components/contact/WhatsAppInquiry";
import ContactDetails from "../components/contact/ContactDetails";
import ContactInfo from "../components/contact/ContactInfo";
import MetadataManager from "../components/MetadataManager";

const ContactPage = () => {
  return (
    <MetadataManager
      title="Contact Us | Dr. Bhoir Farm & Resort"
      description="Contact Dr. Bhoir Farm & Resort for bookings, group stays, events, and getaway inquiries near Kalyan and Badlapur."
      canonicalUrl="https://drbhoirfarmandresort.com/contact"
    >
      <main className="pt-16">

        <section className="relative min-h-[320px] h-[40vh] overflow-hidden">
          <img
            src="/ContactUs.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 flex h-full items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Contact Us
            </h1>
          </div>
        </section>

        <WhatsAppInquiry />

        <ContactDetails />

        <ContactInfo />

      </main>
    </MetadataManager>
  );
};

export default ContactPage;