"use client";
import TheHeader from "@/app/components/header";
import HomeContent from "@/app/components/homeContent";
import About from "@/app/components/about";
import Catalogue from "@/app/components/catalogue";
import ContactUs from "@/app/components/contactUs";
import Quote from "@/app/components/quote";
import TheFooter from "@/app/components/footer";
import PreHeader from "@/app/components/preHeader";


export default function Home() {
  return (
      <div>
        <PreHeader/>
        <TheHeader/>
        <HomeContent/>
        <About/>
        <Catalogue/>
        <ContactUs/>
        <Quote/>
        <TheFooter/>
      </div>

  );
}
