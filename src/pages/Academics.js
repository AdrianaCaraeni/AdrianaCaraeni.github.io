import { useEffect } from "react";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";
import ClassTile from "../components/ClassTile";

const Academics = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const academicCategories = [
    {
      name: "Computer Science",
      classes: [
        { name: "Algorithms 311", status: "completed" },
        { name: "Foundations of Programming 110", status: "completed" },
        { name: "Object Oriented Programming 160", status: "completed" },
        { name: "Data Structures 210", status: "completed" },
        { name: "Intro to C Programming 198C", status: "completed" },
        { name: "Computer Systems Principles 230", status: "completed" },
        { name: "Statistics for Computer Science 240", status: "completed" },
        { name: "Discrete Mathematics 250", status: "completed" },
        { name: "Programming Methodology 220", status: "completed" },
        { name: "Software Engineering 320", status: "completed" },
        { name: "Artificial Intelligence 383", status: "completed" },
        { name: "Search Engines 446", status: "completed" },
        { name: "Chem 111", status: "completed" },
        { name: "Physics 151", status: "completed" },
        { name: "Machine Learning 589", status: "in-progress" },
        { name: "Applications of NLP 485", status: "in-progress" },
        { name: "Formal Language Theory 501", status: "in-progress" },
        { name: "Honors Thesis", status: "incomplete" }
      ]
    },
    {
      name: "Mathematics",
      classes: [
        { name: "Calculus 1 131", status: "completed" },
        { name: "Calculus 2 132", status: "completed" },
        { name: "Calculus 3 233", status: "completed" },
        { name: "Differential Equations 331", status: "completed" },
        { name: "Linear Algebra 235", status: "completed" },
        { name: "Statistics 315", status: "completed" },
        { name: "Advanced Linear Algebra 545", status: "completed" },
        { name: "Abstract Algebra 411", status: "incomplete" },
        { name: "Scientific Computing 551", status: "incomplete" }
      ]
    },
    {
      name: "Business",
      classes: [
        { name: "Accounting 301", status: "completed" },
        { name: "Marketing 301", status: "completed" },
        { name: "Finance 301", status: "in-progress" },
        { name: "OIM 301", status: "incomplete" },
        { name: "Management 301", status: "incomplete" }
      ]
    },
    {
      name: "iCons",
      classes: [
        { name: "189H", status: "completed" },
        { name: "289H", status: "completed" },
        { name: "389H", status: "in-progress" },
        { name: "Honors Thesis", status: "incomplete" }
      ]
    }
  ];

  return (
    <div className="relative bg-primary-white w-full overflow-hidden flex flex-col items-center justify-start tracking-[normal]">
      <Navbar />
      <section
        className="self-stretch overflow-hidden flex flex-col items-center justify-center pt-[30px] pb-[60px] px-20 text-left text-29xl text-primary-black font-heading-h6-semibold mq825:pt-[20px] mq825:pb-[39px] mq825:px-10 mq825:box-border"
      >
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 pr-[41px] pl-10 gap-[40px]">
          {/* Academic Categories */}
          <div className="self-stretch flex flex-col gap-[24px]">
            {academicCategories.map((category, categoryIndex) => {
              const categoryDelay = categoryIndex * 0.5; // Categories animate top to bottom
              return (
                <div 
                  key={categoryIndex} 
                  className="flex flex-col gap-3 opacity-0"
                  style={{
                    animation: `fade-in-top 0.8s ease-out ${categoryDelay}s forwards`
                  }}
                >
                  <h2 className="text-base font-bold text-primary-black mq825:text-sm">
                    {category.name}
                  </h2>
                  <div className="flex flex-row flex-wrap items-start gap-2 mq825:gap-1.5 -ml-0.5">
                    {category.classes.map((classItem, classIndex) => {
                      // Tiles animate left to right within each category
                      const tileDelay = categoryDelay + 0.3 + (classIndex * 0.08);
                      return (
                        <ClassTile
                          key={classIndex}
                          className={classItem.name}
                          status={classItem.status}
                          animationDelay={tileDelay}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="self-stretch flex flex-row items-center justify-start gap-6 mt-8 pt-8 border-t border-solid border-primary-black mq825:gap-4 mq825:flex-wrap">
            <div className="flex flex-row items-center gap-2">
              <div className="w-10 h-10 rounded bg-pastel-green border border-solid border-primary-black"></div>
              <span className="text-base text-primary-black mq825:text-sm">Completed</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-10 h-10 rounded bg-pastel-yellow border border-solid border-primary-black"></div>
              <span className="text-base text-primary-black mq825:text-sm">In Progress</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-10 h-10 rounded bg-pastel-red border border-solid border-primary-black"></div>
              <span className="text-base text-primary-black mq825:text-sm">Yet to Come</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Academics;

