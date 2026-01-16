import { useEffect } from "react";

const TimelineItem = ({ logo, title, company, date, description, index }) => {
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
    <div
      className="w-full flex items-start relative mb-12 pl-16 mq825:pl-12 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0]"
      data-animate-on-scroll
    >
      {/* Circular Logo on the timeline line */}
      <div className="absolute left-6 w-12 h-12 rounded-full bg-primary-white border border-solid border-primary-black flex items-center justify-center shrink-0 overflow-hidden z-20 mq825:w-10 mq825:h-10 mq825:left-5" style={{ transform: 'translateX(-50%)' }}>
        <div className="w-full h-full rounded-full bg-primary-white flex items-center justify-center overflow-hidden">
          <img
            src={logo}
            alt=""
            className="w-11 h-11 object-contain mq825:w-9 mq825:h-9 bg-primary-white"
          />
        </div>
      </div>
      
      {/* Rounded Rectangular Box */}
      <div className="bg-primary-white rounded-lg border border-solid border-primary-black p-5 shadow-sm flex-1 min-w-[200px]">
        <div className="flex flex-row items-baseline gap-3 mb-2 flex-wrap">
          <h3 className="m-0 text-xl font-bold text-primary-black mq825:text-lg">
            {title}
          </h3>
          {company && (
            <>
              <span className="text-sm text-zinc-500">|</span>
              <span className="text-sm text-zinc-500 font-normal">
                {company}
              </span>
            </>
          )}
          {date && (
            <>
              <span className="text-sm text-zinc-500">|</span>
              <span className="text-sm text-zinc-500 italic font-normal">
                {date}
              </span>
            </>
          )}
        </div>
        {description && (
          <p className="m-0 text-base text-primary-black mq825:text-sm">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;

