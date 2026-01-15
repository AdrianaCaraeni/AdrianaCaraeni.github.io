import { useEffect } from "react";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";
import ProjectComponent from "../components/ProjectComponent";

const ProjectsPage = () => {
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
        className="self-stretch bg-primary-black overflow-hidden flex flex-col items-start justify-start py-[60px] pr-[97px] pl-20 box-border max-w-full text-left text-29xl text-primary-white font-heading-h6-semibold lg:pt-[25px] lg:pb-[25px] lg:box-border mq825:py-5 mq825:pr-12 mq825:pl-10 mq825:box-border mq450:pr-5 mq450:box-border mq1425:pt-[39px] mq1425:pb-[39px] mq1425:box-border"
      >
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 px-8 box-border gap-[20px] max-w-full">
          <div
            className="self-stretch overflow-hidden flex flex-row items-center justify-center py-5 px-0 gap-[16px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] mq450:flex-wrap"
            data-animate-on-scroll
          >
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
              Projects
            </h1>
          </div>
          <ProjectComponent
            Image="/First-Paper-Article.jpg"
            Number="01"
            Title="Grading Handwritten Exams Paper"
            ImageLink="https://arxiv.org/abs/2411.05231"
            Text1="Recent advances in generative AI have enabled novel applications, including automated grading of handwritten student responses. In my project, I utilized OpenAI's API with Python to implement three levels of prompting (basic, with solutions, and with rubrics) for GPT-4o to grade probability theory exam responses. This work, published in LAK 2025, demonstrated the potential of multi-modal AI in education while highlighting the challenges of achieving high alignment with human graders."
          />
          <ProjectComponent
            Image="/DuckDefense.png"
            Number="02"
            Title="UMass Tower Defense"
            ImageLink="https://devpost.com/software/tower-defense-27kxwm"
            Text1="Inspiration - UMass Duck Defense is a playful twist on the beloved BloonsTD game, reimagined with UMass-themed elements. Inspired by the iconic campus pond and its famous ducks, our game challenges players to defend the pond from mischievous ducks using seed-shooting towers, with custom art and UMass landmarks like the library and Sam the Minuteman, all crafted from scratch to celebrate our school spirit."
            Text2="New Technical Knowledge - Our project was a crash course in JavaScript, HTML, CSS, and tools like Tiled and GitHub. Despite our limited web development experience, we learned through collaboration and experimentation, gaining skills in object-oriented programming, event handling, grid-based mapping, and version control, which enhanced both our technical and teamwork abilities."
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectsPage;

