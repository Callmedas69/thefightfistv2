// import FAQ from "@/components/mainpage/FAQ";
import Community from "@/components/mainpage/Community";
import Footer from "@/components/mainpage/Footer";
import Hero from "@/components/mainpage/Hero";
import Naratives from "@/components/mainpage/Naratives";
import NavbarGreen from "@/components/mainpage/NavbarGreen";
import VelocityText from "@/components/mainpage/ScrollEffect";
import Team from "@/components/mainpage/Team";
import Whitepaper from "@/components/mainpage/Whitepaper";
import React from "react";
import ScrollToTopButton from "@/components/mainpage/ScrolltoTop";
import HowtoBuy from "@/components/mainpage/HowtoBuy";

const HomePage = () => {
  return (
    <div className="relative h-screen">
      <div className="fixed top-0 inset-x-0 z-50">
        <NavbarGreen />
      </div>
      <div className="flex flex-col gap-0 p-0 m-0">
        <section id="hero" className="p-0 m-0">
          <Hero />
        </section>
        <section className="p-0 m-0">
          <VelocityText />
        </section>
        <section id="community" className="p-0 m-0">
          <Community />
        </section>
        <section id="naratives" className="p-0 m-0">
          <Naratives />
        </section>
        <section id="whitepaper" className="p-0 m-0">
          <Whitepaper />
        </section>
        <section id="how-to-buy" className="p-0 m-0">
          <HowtoBuy />
        </section>
        <section id="team" className="p-0 m-0">
          <Team />
        </section>
        {/* <section className="p-0 m-0">
          <FAQ />
        </section> */}
        <section className="p-0 m-0">
          <Footer />
        </section>
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default HomePage;
