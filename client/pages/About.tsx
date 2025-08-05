import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingNavbar } from "../components/FloatingNavbar";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="px-4 sm:px-8 lg:px-30">
        <div className="max-w-[1200px] mx-auto">
          {/* Main Content */}
          <div className="flex flex-col gap-10 mb-20 pt-40 lg:pt-56">
            {/* Title */}
            <h1 className="text-[#001] text-3xl sm:text-4xl lg:text-[48px] font-bold leading-normal">
              Product Designer | AI Insights
            </h1>
            
            {/* Content Paragraphs */}
            <div className="flex flex-col gap-6">
              <p className="text-black text-base font-normal leading-normal">
                With a strong foundation in UX/UI and hands-on experience in AI development, I bridge the gap between design and engineering through clear, effective communication. I translate complex ideas into intuitive, user-friendly interfaces that balance brand, functionality, and user needs. My skill set includes user research, wireframing, prototyping, visual design, accessibility, storytelling, data visualization, and cross-functional collaboration – all grounded in a strong belief in ethical and impactful design.
              </p>
              
              <p className="text-black text-base font-normal leading-normal">
                Outside of work, I have a deep appreciation for art and love expressing myself through drawing, painting, and experimenting with creative forms. I'm also fascinated by how things are built – from architecture to everyday objects. To recharge, I play football and take long, reflective walks in the forest.
              </p>
            </div>
          </div>
          

        </div>
      </main>

      <div className="pb-24">
        <Footer />
      </div>
      <FloatingNavbar />
    </div>
  );
}
