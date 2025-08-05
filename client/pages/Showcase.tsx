import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingNavbar } from "../components/FloatingNavbar";
import { useParams, Link } from "react-router-dom";

export default function Showcase() {
  const { id } = useParams();

  // Simple project data - easy to edit
  const projects = {
    "1": {
      title: "Meditation Mobile App",
      subtitle: "Inner Peace, Daily.",
      description:
        "Meditation app designed to help young women manage anxiety and improve mental well-being through guided mindfulness practices and habit-building tools.",
      challenge:
        "Young women, like Emma, interested in health often face anxiety and mental health struggles. Emma's goal is to use meditation and breathing to manage her anxiety. Her main hurdle is not knowing how to start, feeling overwhelmed by information, and needing clear guidance.",
      solution:
        "We developed Valeria, a meditation app designed to provide an accessible, flexible, and motivating path to better mental well-being. To help Emma, Valeria offers a 30-Day Meditation Course for beginners, Short Guided Meditations for daily integration, and Guided Breathing Exercises for immediate anxiety relief. Users can access Flexible Yoga Sessions (15-60 min) to fit any schedule, along with Educational Content to boost understanding. The app also includes features to Save Favorites, set Goals & Reminders for consistency, and Daily Affirmations to foster self-worth.",
      results:
        "(Simulated) Our simulation shows Valeria's positive impact on Emma. After three months, Emma reported significantly less anxiety. The 30-day course was crucial for establishing her daily meditation routine, and short guided meditations became a calm start to her mornings. Breathing exercises provided immediate relief during anxious moments, while flexible yoga sessions led to consistent practice. The ability to save favorites made it easy to revisit effective exercises. Overall, Valeria helped Emma gain control over her mental health. She felt less overwhelmed, more motivated, and transformed uncertainty into confidence. The app enabled her to integrate mindfulness and physical activity into sustainable habits, leading to improved quality of life and stronger mental balance.",
      tags: ["(School project)", "UX/UI Design", "Mobile Design", "User Research", "Prototyping"],
      figmaUrl: "https://www.figma.com/design/f5EeeOV05q4GQX4rTE69Hp/Visuel-identitet--Valeria?t=NDLS7iAP7AhinZ57-1",
      mainImage: "/images/projects/Valeria.png",
      conceptsImage: "/images/showcases/valeria1.png",
      evolutionImage: "/images/showcases/valeria2.png",
      finalImage: "/images/showcases/valeria3.png",
    },
    "2": {
      title: "Football App",
      subtitle: "Find and book football matches in seconds.",
      description:
        "Digital platform designed to help football teams easily find, book, and organize friendly matches. With built-in chat, smart matchmaking, and instant booking, it streamlined the entire process of arranging games between teams at the right level.",
      challenge:
        "Amateur and semi-professional football teams often struggle to find and coordinate friendly matches. The process is time-consuming, spread across different platforms, and lacks structure — resulting in last-minute cancellations, mismatched opponents, and unnecessary admin work for coaches and organizers.",
      solution:
        "We created a user-friendly platform that enables football teams to quickly find and book suitable matches based on level, availability, and location. With built-in chat, customizable match preferences, and real-time booking, the platform streamlined the way teams connect and schedule games.",
      results:
        "(Simulated) After switching to a user-friendly platform, a local team booked multiple matches in minutes instead of hours. The smart matchmaking helped them find balanced opponents, while the built-in chat made coordination effortless. Coaches reported fewer cancellations and a smoother planning process. Overall, the platform saved time, reduced friction, and created a more connected football experience.",
      tags: [
        "(School project)",
        "UX/UI Design",
        "Mobile Design",
        "User Research",
        "Prototyping",
      ],
      figmaUrl: "https://www.figma.com/design/HvPtA4NORXng9GHl6rIsFr/Fotbollsapp-Skoluppgift-?node-id=2014-3810&p=f&t=t3U9K7Yb03WoOxqG-0",
      mainImage: "/images/projects/fotbollapp.png",
      conceptsImage: "/images/showcases/fotboll1.png",
      evolutionImage: "/images/showcases/fotboll2.png",
      finalImage: "/images/showcases/fotboll3.png",
    },
    "3": {
      title: "U-XI",
      subtitle: "Master UX/UI Design with Hands-On Learning",
      description:
        "Our website offers clear, concise lessons on UX/UI design fundamentals to help you build real skills quickly.",
      challenge:
        "Many beginners struggle to find easy-to-understand, practical resources that bridge the gap between theory and real-world design.",
      solution:
        "We provide step-by-step guides,that make learning UX/UI design straightforward and engaging.",
      results:
        "(Simulated) Users gain confidence and practical skills, enabling them to create user-friendly and visually appealing designs from day one.",
      tags: ["(Own project)", "Accessibility", "User Experience", "UX/UI Design", "Web Design", "User Research", "Prototyping"],
      figmaUrl: "https://www.figma.com/design/healthcare-portal",
      mainImage: "/images/projects/uxi.png",
      conceptsImage: "/images/showcases/uxi1.png",
      evolutionImage: "/images/showcases/uxi2.png",
      finalImage: "/images/showcases/uxi3.png",
    },
    "4": {
      title: "E-Commerce Platform",
      subtitle: "Transforming Shopping Experience",
      description:
        "E-commerce platform focusing on user experience, conversion optimization, and accessibility.",
      challenge:
        "Customers face overwhelming choices and complicated checkout processes in many online fashion stores, leading to abandoned carts and lost sales.",
      solution:
        "We designed a clean, user-friendly platform with intuitive navigation, easy product filtering, and a smooth, secure checkout process.",
      results:
        "(Simulated) Increased customer satisfaction, higher conversion rates, and steady growth in repeat purchases and brand loyalty.",
      tags: [
        "(School project)",
        "UX/UI Design",
        "Mobile Design",
        "User Research",
        "Prototyping",
      ],
      figmaUrl: "https://www.figma.com/design/fintech-platform",
      mainImage: "/images/projects/ecommer.png",
      conceptsImage: "/images/showcases/ecommer1.png",
      evolutionImage: "/images/showcases/ecommer2.png",
      finalImage: "/images/showcases/ecommer3.png",
    },
  };

  const project = projects[id as keyof typeof projects] || projects["1"];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="px-4 sm:px-8 lg:px-30">
        <div className="max-w-[1200px] mx-auto pt-32 lg:pt-48 pb-20">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-black hover:opacity-70 transition-all duration-200 mb-12 group"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:-translate-x-1 transition-transform duration-200"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back to Home
          </Link>

          <div className="flex flex-col gap-16">
            {/* Title Section */}
            <div className="flex flex-col gap-6">
              <h1 className="text-[#001] text-3xl sm:text-4xl lg:text-[48px] font-bold leading-normal">
                {project.title}
              </h1>
              <p className="text-[#001] text-xl sm:text-2xl font-medium">
                {project.subtitle}
              </p>
              <p className="text-black text-lg leading-relaxed max-w-[800px]">
                {project.description}
              </p>

              {/* Interactive Tags */}
              <div className="flex flex-wrap gap-3 mt-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 hover:scale-105 hover:shadow-md transition-all duration-200 cursor-pointer select-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Main Project Image */}
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[504px] rounded-[40px] overflow-hidden">
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Challenge and Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="flex flex-col gap-6">
                <h2 className="text-[#001] text-2xl font-bold">Challenge</h2>
                <p className="text-black text-base font-normal leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <h2 className="text-[#001] text-2xl font-bold">Solution</h2>
                <p className="text-black text-base font-normal leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col gap-6">
              <h2 className="text-[#001] text-2xl font-bold">
                Results & Impact
              </h2>
              <p className="text-black text-base font-normal leading-relaxed">
                {project.results}
              </p>
            </div>

            {/* Design Progression Images - Unique for each project */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-4 group">
                <div className="w-full h-[280px] rounded-[20px] overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={project.conceptsImage}
                    alt="Initial Design Concepts"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-[#001] text-lg font-medium text-center">
                  Initial Concepts
                </h3>
              </div>

              <div className="flex flex-col gap-4 group">
                <div className="w-full h-[280px] rounded-[20px] overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={project.evolutionImage}
                    alt="Design Evolution"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-[#001] text-lg font-medium text-center">
                  Design Evolution
                </h3>
              </div>

              <div className="flex flex-col gap-4 group">
                <div className="w-full h-[280px] rounded-[20px] overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={project.finalImage}
                    alt="Final Design Implementation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-[#001] text-lg font-medium text-center">
                  Final Design
                </h3>
              </div>
            </div>

            {/* Figma Button */}
            <div className="flex justify-center pt-8">
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-200 font-medium hover:scale-105"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
                  <path d="M4 8a4 4 0 0 1 8 0v8a4 4 0 1 1-8 0Z" />
                  <path d="M12 4a4 4 0 0 1 0 8V4Z" />
                </svg>
                See more on Figma
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="group-hover:translate-x-1 transition-transform duration-200"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>

            {/* Back to Projects */}
            <div className="flex justify-center pt-8">
              <Link
                to="/"
                className="px-8 py-4 bg-gray-100 text-black rounded-full hover:bg-gray-200 transition-all duration-200 font-medium hover:scale-105"
              >
                View More Projects
              </Link>
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
