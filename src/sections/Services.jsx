import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, i) => (
        <ServiceCard
          key={service.label}
          delay={i * 0.5}
          {...service}
        ></ServiceCard>
      ))}
    </section>
  );
};

export default Services;
