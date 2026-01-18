import { useEffect } from "react";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";
import ExperienceComponent from "../components/ExperienceComponent";

const Industry = () => {
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

  return (
    <div className="relative bg-primary-white w-full overflow-hidden flex flex-col items-center justify-start tracking-[normal]">
      <Navbar />
      <section
        className="self-stretch bg-primary-black overflow-hidden flex flex-row items-start justify-start pt-[20px] pb-[60px] pr-[97px] pl-20 box-border max-w-full text-left text-29xl text-primary-white font-heading-h6-semibold mq825:pt-[15px] mq825:pb-[25px] mq825:pr-12 mq825:pl-10 mq825:box-border mq450:pt-5 mq450:pr-0 mq450:pl-0 mq450:pb-5 mq450:box-border mq1425:pt-[20px] mq1425:pb-[39px] mq1425:box-border"
      >
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-center py-0 px-8 box-border gap-[20px] max-w-full">
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-5 px-6 box-border gap-[32px] max-w-full text-center text-5xl mq825:gap-[16px] mq825:pt-5 mq825:pb-5 mq450:pl-0 mq450:pr-0 mq825:box-border mq1425:pt-[26px] mq1425:pb-[26px] mq1425:box-border">
            <ExperienceComponent
              Title="Fidelity - Full Stack Software Engineer Intern"
              Date="Jun - August 2026"
              Text1="Incoming full stack software engineer in Merrimack, NH"
              Text2=""
            />
            <ExperienceComponent
              Title="Commonwealth of Massachusetts - Artificial Intelligence Developer"
              Date="Oct - Dec 2025"
              Text1="Collaborated with differing state agencies to resolve over 10 critical bugs and enhance user experience by implementing dynamic responsive design across the GLO platform while incorporating user feedback throughout the development process."
              Text2="Developed an intelligent prompt optimization feature for Genie that automatically rephrases user inputs and provides explanations of improvements before LLM processing, ensuring a user-centered experience that teaches state employees prompt engineering decision making."
            />
            <ExperienceComponent
              Title="Commonwealth of Massachusetts - Artificial Intelligence Intern"
              Date="April - August 2025"
              Text1="Developed an automated translation system that processes videos into multiple target languages concurrently, building off the AWS video transcriber repository with parallel Google Translate API execution to serve more than 1,200 Culinary Career Ladder students."
              Text2="Implemented intelligent transcription caching that reuses segments for duplicate content, deployed scalable compute infrastructure, and established automated processing pipelines, achieving a 95% reduction in operational expenses while enhancing translation workflow efficiency by 83% through unified content management and seamless save/edit functionality."
            />
            <ExperienceComponent
              Title="TeamUp Apps For Good - Team Lead and Full Stack Developer"
              Date="Jun - Aug 2025"
              Text1="Led team through ten weeks of Agile development as team lead and frontend developer to create CapMetro (https://teamup.org/apps/capmetro/), a full-stack web application addressing challenges urban transit riders face with unreliable schedules and unclear wait times."
              Text2="The platform visualizes real-time locations of public buses in Austin, TX, allowing users to track all active routes or filter by specific route numbers with data refreshing every 15 seconds. Combines live tracking with historical analytics, enabling exploration of on-time performance patterns across different routes and times of day. Built with React.js and Google Maps API on the frontend, Python Flask backend with WebSocket integration, and PostgreSQL/Redis for data management, sourcing all information from the Texas Open Data Portal."
            />
            <ExperienceComponent
              Title="Leadership Academy - Program Fellow"
              Date="July 2024"
              Text1="Selected for Harvard Kennedy School's Leadership Academy, a competitive three-week intensive program for 70 computer science and engineering students nationwide focused on professional development and leadership skills in preparation for industry roles."
              Text2="Completed 75 hours of training in negotiation, problem-solving, and communication, followed by a 9-month mentorship program for career development."
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Industry;

