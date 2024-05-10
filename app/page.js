import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
export default function Home() {
  return (
  <main className="flex min-h-screen flex-col bg-[#121212]">
    <Navbar />
    <div class="container mx-auto px-8 py-24">
    <HeroSection/>
    <AboutSection/>
    <ProjectsSection/>
    <EmailSection/>
    <Footer/>
    </div>
  </main>
  );
}
