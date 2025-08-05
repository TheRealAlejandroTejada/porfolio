import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingNavbar } from "../components/FloatingNavbar";
import { ProjectCard } from "../components/ProjectCard";

export default function Index() {
  // Simple project data - easy to edit
  const projects = [
    {
      title1: "Valeria",
      title2: "Mobile App",
      description:
        "Meditation app helping young women manage anxiety and build mental well-being habits.",
      showcaseId: "1",
      image: "/images/projects/Valeria.png",
    },
    {
      title1: "Football App",
      title2: "Mobile App",
      description:
        "Platform for football teams to easily find, book, and organize friendly matches.",
      showcaseId: "2",
      image: "/images/projects/fotbollapp.png",
    },
    {
      title1: "U-XI",
      title2: "Website",
      description:
        "A website that simply teaches the basics of UX/UI design",
      showcaseId: "3",
      image: "/images/projects/uxi.png",
    },
    {
      title1: "E-coommerce",
      title2: "Web Store",
      description:
        "Democratizing investment access through clear design and educational content",
      showcaseId: "4",
      image: "/images/projects/ecommer.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="px-4 sm:px-8 lg:px-30">
        <div className="max-w-[1200px] mx-auto">
          {/* Hero Section - ISOLATED AND NOT CLICKABLE */}
          <section className="relative z-10 pt-40 lg:pt-56 mb-48 lg:mb-64 pointer-events-none">
            <div className="max-w-[818px] pointer-events-none">
              <h1 className="text-[#001] text-3xl sm:text-4xl lg:text-[48px] font-bold leading-normal mb-10 pointer-events-none">
                Product Designer based in Sweden
              </h1>

              <p className="text-black text-base font-normal leading-normal pointer-events-none">
                Hi! I’m a product designer passionate about creating intuitive, user-focused, and conversion-driven web and mobile experiences. I combine UX thinking with clean UI to help businesses turn ideas into digital products that work.
              </p>
            </div>
          </section>

          {/* Projects Section - SEPARATE AND CLICKABLE */}
          <section className="relative z-0">
            <div className="flex flex-col gap-40">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title1={project.title1}
                  title2={project.title2}
                  description={project.description}
                  showcaseId={project.showcaseId}
                  image={project.image}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <div className="pb-24">
        <Footer />
      </div>
      <FloatingNavbar />
    </div>
  );
}
