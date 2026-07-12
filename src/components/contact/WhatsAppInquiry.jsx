import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "918779414474";

const actions = [
  {
    label: "Ask a Question",
    message:
      "Hello, I would like to know more about Dr. Bhoir Farm & Resort.",
  },
  {
    label: "Book Your Stay",
    message:
      "Hello, I would like to book a stay at Dr. Bhoir Farm & Resort.",
  },
];

const WhatsAppInquiry = () => {
  return (
    <section className="bg-primary px-4 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <header className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-semibold">
            Get in Touch with{" "}
            <span className="text-cta">Us</span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            Were here to help with bookings, questions,
            events, and anything else you need to plan
            the perfect getaway.
          </p>
        </header>

        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">

          <img
            src="/whatsapp-inquiry.webp"
            alt="Guests enjoying a relaxing stay at Dr. Bhoir Farm & Resort"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />

          <div className="flex flex-col justify-center p-8 lg:p-12">

            <h3 className="mb-4 text-2xl font-semibold bg-gradient-to-r from-[#075E54] to-[#25D366] bg-clip-text text-transparent">
              Fast and Easy Bookings on WhatsApp
            </h3>

            <p className="mb-6 text-gray-600">
              Get personalized assistance directly from our team and
              enjoy hassle-free planning for your visit.
            </p>

            <ul className="mb-8 space-y-2 text-gray-700">
              <li>✓ Instant booking assistance</li>
              <li>✓ Group booking support</li>
              <li>✓ Event and celebration inquiries</li>
              <li>✓ Quick responses on WhatsApp</li>
            </ul>

            <p className="mb-8 text-sm text-green-700 font-medium">
              Typically replies within 15 minutes.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              {actions.map((action) => {
                const url =
                  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
                  encodeURIComponent(action.message);

                return (
                  <a
                    key={action.label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={action.label}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#1EBE5A]"
                  >
                    <MessageCircle
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                    {action.label}
                  </a>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatsAppInquiry;