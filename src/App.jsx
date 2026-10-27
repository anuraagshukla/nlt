
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StudentHelpDesk from "./components/StudentHelpDesk";
import CurrentNotices from "./components/CurrentNotices";
import UniversityIntro from "./components/UniversityIntro";
import CourseCategories from "./components/CourseCategories";
import WhyChooseUs from "./components/WhyChooseUs";
import Placements from "./components/Placements";
import AcademicProgrammes from "./components/AcademicProgrammes";
import Events from "./components/Events";
import UniversityGrowth from "./components/UniversityGrowth";
import Testimonials from "./components/Testimonials";
import RecentEvents from "./components/RecentEvents";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navbar />

      <div className="flex items-start">
        {/* Student Help Desk Sidebar */}
        <div className="sticky top-0 h-[calc(100vh-92px)] w-[240px] min-w-[240px] shrink-0">
          <StudentHelpDesk />
        </div>

        {/* Main Content */}
        <main
          id="main-content"
          className="min-w-0 flex-1"
          style={{ width: "calc(100% - 240px)" }}
        >
          <Hero />
          <CurrentNotices />
          <UniversityIntro />
          <CourseCategories />
          <WhyChooseUs />
          <Placements />
          <AcademicProgrammes />
          <UniversityGrowth />
          <Events />
          <Testimonials />
          <RecentEvents />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
