import Image from "next/image";

export function PartnerLogos() {
  const partners = [
    { src: "/assets/images/logo-partner-1.png", alt: "Partner logo 1" },
    { src: "/assets/images/logo-partner-2.png", alt: "Partner logo 2" },
    { src: "/assets/images/logo-partner-3.png", alt: "Partner logo 3" },
    { src: "/assets/images/logo-partner-4.png", alt: "Partner logo 4" },
    { src: "/assets/images/logo-partner-1.png", alt: "Partner logo 5" },
  ];

  return (
    <section className="relative z-10 w-full border-y border-neutral-200/80 bg-white py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center opacity-70 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={140}
                height={36}
                className="h-7 w-auto object-contain md:h-8"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
