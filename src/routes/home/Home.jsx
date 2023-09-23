import React, { useRef } from "react";
import Hero from "../../components/hero/Hero";
import FeaturedTitle from "../../components/featured/FeaturedTitle";
import FeaturedItems from "../../components/featured/FeaturedItems";

function Home() {

  const featured = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth'
    })
}

  return (
    <>
      <section className="min-h-screen max-h-screen">
        <div>
          <Hero scrollToSection={scrollToSection} featured={featured}/>
        </div>
      </section>
      <section ref={featured} className="flex lg:items-center max-h-screen xl:justify-center xl:min-h-screen">
        <FeaturedTitle />
      </section>
      <section className="mb-32">
        <FeaturedItems />
      </section>
    </>
  );
}

export default Home;
