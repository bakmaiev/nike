import { useState } from "react";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import {
  Hero,
  Subscribe,
  SuperQuality,
  Services,
  CustomerReviews,
  SpecialOffer,
  PopularProducts,
  Footer,
} from "./sections";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburgerBtn = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className="relative">
      <Nav isOpen={isOpen} onClick={toggleHamburgerBtn} />
      {isOpen && <SideBar isOpen={isOpen} onClick={toggleHamburgerBtn} />}
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
