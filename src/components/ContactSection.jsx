import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import facilityImg from "../assets/images/masterpiece-office.png"; // Replace with your image
import ContactForm from "./ContactForm"; // Make sure ContactForm.jsx exists in same folder

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Phone size={24} className="text-[#16758a]" />,
      label: "Phone",
      value: [
        { text: "+20 222 661 742", href: "tel:+20222661742" },
        { text: "+20 222 661 712", href: "tel:+20222661712" },
      ],
    },
    {
      icon: <Mail size={24} className="text-[#16758a]" />,
      label: "Email",
      value: "info@masterpiece-eg.com",
      link: "mailto:info@masterpiece-eg.com",
    },
    {
      icon: <MapPin size={24} className="text-[#16758a]" />,
      label: "Address",
      value:
        "159 El Moltaqa El Arabi, Sheraton, Heliopolis, Cairo, Egypt",
      link: "https://maps.google.com/?q=159+El+Moltaqa+El+Arabi,+Sheraton,+Heliopolis,+Cairo,+Egypt",
    },
  ];

  return (
    <section className="bg-[#F5F5F6] py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Grid: Info + Image */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-[#16758a] uppercase">
              Reach Us
            </h2>
            <div className="space-y-6">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-base font-semibold text-[#16758a] uppercase">
                      {item.label}
                    </h3>
                    {Array.isArray(item.value) ? (
                      <div className="flex flex-col gap-1">
                        {item.value.map((v, i) => (
                          <a
                            key={i}
                            href={v.href}
                            className="text-gray-800 hover:text-[#16758a]"
                          >
                            {v.text}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        href={item.link}
                        target={item.label === "Address" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-[#16758a]"
                      >
                        {item.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden h-[400px] sm:h-[450px] w-full shadow-md"
          >
            <img
              src={facilityImg}
              alt="Masterpiece Facility"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
