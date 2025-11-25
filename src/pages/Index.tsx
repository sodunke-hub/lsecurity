import Hero from "@/components/Hero";
import WhatYouLearn from "@/components/WhatYouLearn";
import CourseDescription from "@/components/CourseDescription";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import Requirements from "@/components/Requirements";
import CourseModules from "@/components/CourseModules";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatYouLearn />
      <CourseDescription />
      <WhoIsThisFor />
      <Requirements />
      <CourseModules />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
