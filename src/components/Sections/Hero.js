import { useCallback, useEffect } from "react";
import TimelineItem from "../TimelineItem";

const Hero = () => {
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

      const onLinkedInClick = useCallback(() => {
        window.open("https://www.linkedin.com/in/adriana-caraeni/");
      }, []);
    
      const onGithubClick = useCallback(() => {
        window.open("https://github.com/AdrianaCaraeni");
      }, []);
    
      const onTwitterClick = useCallback(() => {
        window.open("https://twitter.com/ACaraeni70560");
      }, []);
    
      const onInstagramClick = useCallback(() => {
        window.open("https://www.instagram.com/redshirtblackskirt/?hl=en");
      }, []);

    // Timeline data - most recent at top
    const timelineItems = [
      {
        logo: "/fidelity_investments_logo.jpg",
        title: "Incoming Fidelity Full Stack Engineer",
        company: "Fidelity",
        date: "May 2026 - August 2026",
        description: "Working on AWS cloud solutions and full-stack software development."
      },
      {
        logo: "/commonwealth_logo.jpg",
        title: "Artificial Intelligence Developer",
        company: "Commonwealth of Massachusetts",
        date: "Oct 2025 - Dec 2025",
        description: "Resolved 10+ critical bugs across the Government's Legal Office AI Tool and the Genie (General LLM Learning) AI Tool working with Agile development."
      },
      {
        logo: "/teamup_logo.jpg",
        title: "Team Lead & Full Stack Developer",
        company: "TeamUp",
        date: "Jun - Aug 2025",
        description: "Lead a team of eight software developers to create CapMetro, a real time bus transit application Austin, Texas. Designed the system architecture and was led on deployment using Digital Ocean."
      },
      {
        logo: "/commonwealth_logo.jpg",
        title: "Artificial Intelligence Intern",
        company: "Commonwealth of Massachusetts",
        date: "April 2025 - August 2025",
        description: "Built an automated video translation web application serving 1,200+ students, reducing operational costs by 95% through intelligent caching and parallel API processing."
      },
      {
        logo: "/ersp_logo.png",
        title: "Research Fellow",
        company: "Early Research Scholars Program",
        date: "Sept 2024 - May 2025",
        description: "Worked with the Center for Intelligent Information Retrieval lab on a project to gather data using Amazon Mechanical Turk for personalizing Large Language Models in order to have high quality data for Direct Preference Optimization fine-tuning."
      },
      {
        logo: "/ml4ed_logo.png",
        title: "Research Assistant",
        company: "Machine Learning for Education Lab",
        date: "May 2024 - April 2025",
        description: "Investigated how to best grade handwritten math exams using multimodal LLM capabilities (summer 2024). Investigated how to best grade essays using LLMs (spring 2025)."
      },
      {
        logo: "/iCons_logo.jpg",
        title: "Researcher and Student Leader",
        company: "iCons",
        date: "Feb 2024 - Present",
        description: "Investigated the possibility of using Quantum Computing for route optimization. Selected by peers to be student leader for Cohort of 60+ students to increase community and help organize events."
      },
      // Add more timeline items here as needed
    ];

    return (
        <section className="self-stretch overflow-hidden flex flex-col items-center justify-center py-[60px] px-[69px] box-border max-w-full text-left text-primary-black font-heading-h6-semibold mq825:py-[39px] mq825:px-[34px] mq825:box-border">
          {/* Timeline Container */}
          <div className="w-full max-w-4xl relative py-8">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 w-0.5 h-full bg-zinc-500 top-0 mq825:left-5 z-0"></div>
            
            {/* Timeline Items */}
            <div className="relative w-full">
              {timelineItems.map((item, index) => (
                <TimelineItem
                  key={index}
                  logo={item.logo}
                  title={item.title}
                  company={item.company}
                  date={item.date}
                  description={item.description}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Social Media Buttons */}
          <div
            className="self-stretch h-14 flex flex-row items-center justify-center gap-[32px] mt-12 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] mq450:gap-[16px]"
            data-animate-on-scroll
          >
            <button
              className="cursor-pointer [border:none] p-4 bg-primary-black self-stretch rounded w-14 flex flex-row items-center justify-center box-border active:animate-[1s_ease_0s_infinite_normal_none_shadow-pop-tr] active:opacity-[1] hover:bg-darkslategray"
              onClick={onLinkedInClick}
            >
              <img
                className="relative w-5 h-5"
                alt=""
                src="/LinkedIn.svg"
              />
            </button>
            <button
              className="cursor-pointer p-4 bg-[transparent] rounded box-border w-[58px] h-[58px] flex flex-row items-center justify-center border-[2px] border-solid border-primary-black active:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] active:opacity-[1]"
              onClick={onGithubClick}
            >
              <img
                className="relative w-5 h-5"
                alt=""
                src="/Github.svg"
              />
            </button>
            <button
              className="cursor-pointer p-4 bg-[transparent] rounded box-border w-[58px] h-[58px] flex flex-row items-center justify-center border-[2px] border-solid border-primary-black active:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] active:opacity-[1]"
              onClick={onTwitterClick}
            >
              <img
                className="relative w-5 h-5"
                alt=""
                src="/Twitter.svg"
              />
            </button>
            <button
              className="cursor-pointer p-4 bg-[transparent] rounded box-border w-[58px] h-[58px] flex flex-row items-center justify-center border-[2px] border-solid border-primary-black active:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] active:opacity-[1]"
              onClick={onInstagramClick}
            >
              <img
                className="relative w-5 h-5"
                alt=""
                src="/Insta.svg"
              />
            </button>
          </div>
      </section>
    )};

export default Hero;