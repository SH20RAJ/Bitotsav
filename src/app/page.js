import { BitotsavHero } from "@/components/landing/BG";
import Footer from "@/components/landing/FOOTER";
import { BentoGridGallery } from "@/components/landing/Gallery";
import { Nav } from "@/components/landing/NAV";
import { Sponsors } from "@/components/landing/Sponsors";
import { SquaresDemo } from "@/components/landing/SquaresBG";
import { TestimonialsSectionDemo } from "@/components/landing/Testimonials";
import { Connect } from "@/components/landing/TICKET";

export default function Home() {
  return (
    <>
      <div>
        <Nav />
        <BitotsavHero />
        <div className=" w-full flex justify-center items-center">
          <BentoGridGallery />
        </div>
        <Connect />
        <TestimonialsSectionDemo />
        <div className="space-y-8">
          <h2 className="text-center text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            Our Esteemed Sponsors
          </h2>

           <SquaresDemo />
        </div>

        <Footer />
      </div>
    </>
  );
}
