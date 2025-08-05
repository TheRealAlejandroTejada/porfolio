import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingNavbar } from "../components/FloatingNavbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="px-4 sm:px-8 lg:px-30">
        <div className="max-w-[1200px] mx-auto">
          {/* Main Content */}
          <div className="flex flex-col gap-10 mb-20 max-w-[784px] pt-40 lg:pt-56">
            {/* Title */}
            <h1 className="text-[#001] text-3xl sm:text-4xl lg:text-[48px] font-bold leading-normal">
              Let's create something meaningful together.
            </h1>
            
            {/* Content */}
            <div className="flex flex-col gap-6">
              <p className="text-black text-base font-normal leading-normal">
                I’m open to freelance work, collaborations, or just a good design conversation. Feel free to reach out – I’d love to hear from you.
              </p>
              
              <a 
                href="mailto:alejjanu41@gmail.com" 
                className="text-black text-base font-normal underline hover:opacity-70 transition-opacity"
              >
                alejjanu41@gmail.com
              </a>
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
