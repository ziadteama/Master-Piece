import ServiceSplitCard from "./ServiceSplitCard";
import contracting from "../assets/images/contracting.png";
import facilities from "../assets/images/facilities.png";
import fitout from "../assets/images/fitout.png";
import mep from "../assets/images/mep.png";

export default function ServicesSection() {
  const services = [
    {
      title: "General Contracting",
      image: contracting,
      description:
        "From groundbreaking to handover, our general contracting service ensures seamless project execution. We integrate design, construction, and management to deliver on time, on budget, and beyond expectations — handling every detail with unmatched precision.",
      link: "/services/general-contracting",
    },
    {
      title: "Facilities & Property Management",
      image: facilities,
      description:
        "We manage, maintain, and elevate operational performance across diverse properties. Our service focuses on sustainability, cost-efficiency, and long-term asset value — ensuring buildings function smoothly and tenants feel supported.",
      link: "/services/facilities-management",
    },
    {
      title: "Interior Finishing & Fit-Out",
      image: fitout,
      description:
        "Our interior fit-out service transforms raw spaces into refined environments. We craft functional, aesthetic interiors tailored to client identity — balancing beauty, comfort, and efficiency from concept to completion.",
      link: "/services/interior-fitout",
    },
    {
      title: "MEP Works",
      image: mep,
      description:
        "Our MEP (Mechanical, Electrical, and Plumbing) works are engineered for performance, safety, and efficiency. We integrate smart systems that support the infrastructure of modern buildings — designed to meet local and international standards.",
      link: "/services/mep",
    },
  ];

  return (
    <section className="bg-[#F5F5F6] px-6 sm:px-10 md:px-16 xl:px-24 py-20">
      <div className="max-w-screen-xl mx-auto space-y-20">
        {services.map((service, idx) => (
          <ServiceSplitCard
            key={idx}
            title={service.title}
            imageUrl={service.image}
            description={service.description}
            link={service.link}
            reverse={idx % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
