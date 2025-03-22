import  Hero  from "./components/Hero";
import  ServicesSection  from "./components/ServicesSection";
import  Navbar  from "./components/Navbar";
import  Footer from "./components/Footer"
import  PortfolioSection  from "./components/PortfolioSection";
import  Testimonials  from "./components/Testimonials";
import  Footer2 from "./components/footer2"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 sm:p-20 gap-16">

      <Hero />

     
      <ServicesSection />

      
      <PortfolioSection />
      
      <Testimonials />
      


    </div>
  );
}
