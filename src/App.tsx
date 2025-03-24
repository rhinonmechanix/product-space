import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Transitions from "./components/Transitions";
import Stats from "./components/Stats";
import CourseJourney from "./components/CourseJourney";
import Curriculum from "./components/Curriculum";
import AITools from "./components/AITools";
import Mentors from "./components/Mentors";
import Testimonials from "./components/Testimonials";
import Companies from "./components/Companies";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Transitions />
        <Stats />
        <CourseJourney />
        <Curriculum />
        <AITools />
        <Mentors />
        <Testimonials />
        <Companies />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
