import React from "react";
import CarouselPage from "../Main/CarouselPage";
import CategoryPage from "../Main/CategoryPage";
import OurPK from "../Main/OurPK";
import Promotions from "../Main/Promotions";
import CustomizePC from "../Main/CustomizePC";
import Services from "../Main/Services";
import WhyChooseUs from "../Main/WhyChooseUs";
import FAQSection from "../Main/FAQSection";
import BlogSection from "../Main/BlogSection";
import CallSection from "../Main/CallSection";

const MainContent = () => {
  return (
    <div>
      <CarouselPage />
      <CategoryPage />
      <OurPK />
      <Promotions />
      <CustomizePC />
      <Services />
      <WhyChooseUs />
      <FAQSection />
      <BlogSection />
      <CallSection />
    </div>
  );
};

export default MainContent;
