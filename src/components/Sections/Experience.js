import { useEffect } from "react";
import ExperienceComponent from "../ExperienceComponent";

const Experience = () => {
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
    <section
      className="self-stretch bg-primary-black overflow-hidden flex flex-row items-start justify-start py-[60px] pr-[97px] pl-20 box-border max-w-full text-left text-29xl text-primary-white font-heading-h6-semibold mq825:py-[25px] mq825:pr-12 mq825:pl-10 mq825:box-border mq450:pt-5 mq450:pr-0 mq450:pl-0 mq450:pb-5 mq450:box-border mq1425:pt-[39px] mq1425:pb-[39px] mq1425:box-border"
      data-scroll-to="experience"
    >
      <div className="flex-1 overflow-hidden flex flex-col items-center justify-center py-0 px-8 box-border  gap-[20px] max-w-full">
        <div
          className="self-stretch overflow-hidden flex flex-row items-center justify-center py-5 px-0 gap-[16px]  [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] mq450:flex-wrap"
          data-animate-on-scroll
        >
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
            My
          </h1>
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-extrabold font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
            Experience
          </h1>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-10 px-6 box-border gap-[32px] max-w-full text-center text-5xl mq825:gap-[16px] mq825:pt-5 mq825:pb-5 mq450:pl-0 mq450:pr-0 mq825:box-border mq1425:pt-[26px] mq1425:pb-[26px] mq1425:box-border">
          
          <ExperienceComponent
            Title="Software Engineering Intern @ Wiki-innovation"
            Date="Dec 2024 – Present"
            Text1="Developing data-scraping algorithms to extract publicly available data (e.g., research papers, student proposals)."
            Text2="Leading R&D efforts to create AI agents that translate raw data into structured 'opportunities' for innovators and entrepreneurs."
            Text3="Overseeing web design and development to deliver data-driven insights through an interactive interface for end-users."
          />
          <ExperienceComponent
            Title="Artificial Intelligence Researcher @ ExamAI"
            Date="Dec 2024 – Present"
            Text1="Researching and developing an AI system for mass grading of handwritten papers."
            Text2="Designing a generalizable grading system to streamline the assessment process for exam AI."
          />
          <ExperienceComponent
            Title="Research Assistant @ Center for Intelligent Information Retrieval Lab"
            Date="Sept 2024 – Present"
            Text1="Developed a series of web pages to be deployed on Amazon Mechanical Turk, gathering data on LLM preferences, by integrating
 OpenAI API, Gemini, and ChatGPT-4o mini into the user interfaces."
            Text2="Researching methods to enhance Large Language Models (LLMs) for improved personalization in user-specific question answering."
          />
          <ExperienceComponent
            Title="Research Assistant @ Machine Learning for Education"
            Date="May 2024 – Present"
            Text1="Designed a multi-tiered system of prompts for ChatGPT-4, improving grading accuracy by 20% for real student exams."
            Text2="Leveraged Java code to batch prompt OpenAI, facilitating the collection of hundreds of data points for analysis."
            Text3="Develop and integrate data collection and evaluation pipelines for GPT-4o in an NLP research project, including implementing
            rubric-based prompting, chain-of-thought (CoT) generation, zero- and few-shot learning techniques, and aligning with standard data
            splits and metrics for reproducibility."
          />
          <ExperienceComponent
            Title="Events Coordinator @ Massachusetts AI"
            Date="Sep 2024 – Present"
            Text1="Plan events for the increased involvement and knowledge of artificial intelligence @ UMass Amherst."
            Text2="Facilitating the Spring 2025 AI/ML program organized by MassAI, including mentoring project participants and assisting with the end-of-semester poster session."
          />
          <ExperienceComponent
            Title="Level-Up Team @ Entrepeurship Club"
            Date="January 2024 – Present"
            Text1="Collaborating with the Berthuime Center for Entrepeurship to host educational experiences for UMass Amherst students a minimum of month a month during the semester."
            Text2="Present bootcamp presentations to club members, visit startups in the area, and work with the MBA fellows."
          />
          
        </div>
      </div>
    </section>
  );
};

export default Experience;
