import { useState } from "react";

const ResearchItem = ({ organization, date, projects }) => {
  return (
    <div
      className="self-stretch rounded-3xs box-border flex flex-col items-start justify-start py-[20px] pr-[25px] pl-[23px] gap-[12px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] max-w-full text-center text-primary-white font-heading-h6-semibold border-[1px] border-solid border-zinc-500"
      data-animate-on-scroll
    >
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full lg:flex-wrap">
        <div className="flex flex-row items-center justify-start gap-[30px] max-w-full">
          <h3 className="m-0 relative text-lg tracking-[-0.02em] leading-[22px] font-semibold font-inherit mq450:text-base mq450:leading-[20px]">
            {organization}
          </h3>
        </div>
        <div className="relative text-sm tracking-[-0.02em] leading-[18px] font-semibold text-zinc-300 flex items-center justify-center">
          {date}
        </div>
      </div>
      <div className="self-stretch flex flex-col gap-2">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectItem = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Split description into short and extended parts
  const extendMarker = /\((?:\+ )?extend paragraph here\)/g;
  const firstMatch = project.description.match(extendMarker);
  
  let shortDescription = project.description;
  let extendedDescription = '';
  
  if (firstMatch) {
    const firstMarkerIndex = project.description.indexOf(firstMatch[0]);
    shortDescription = project.description.substring(0, firstMarkerIndex).trim();
    // Remove all markers and get everything after the first marker
    extendedDescription = project.description
      .substring(firstMarkerIndex)
      .replace(extendMarker, '')
      .trim();
  }

  const handleTitleClick = () => {
    if (project.link) {
      if (project.link.startsWith('http')) {
        window.open(project.link, '_blank');
      } else {
        // PDF link
        const link = document.createElement('a');
        link.href = project.link;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex flex-row items-start gap-2">
        {project.link ? (
          <h4 
            className="m-0 text-base font-bold text-primary-white cursor-pointer hover:underline mq450:text-sm"
            onClick={handleTitleClick}
          >
            {project.title}
          </h4>
        ) : (
          <h4 className="m-0 text-base font-bold text-primary-white mq450:text-sm">
            {project.title}
          </h4>
        )}
      </div>
      <div className="text-[12px] italic text-zinc-300 text-left leading-relaxed">
        <span>{shortDescription}</span>
        {extendedDescription && (
          <>
            {isExpanded ? (
              <>
                <span> {extendedDescription}</span>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="ml-2 text-primary-white font-bold border border-primary-black rounded px-1.5 py-0.5 bg-transparent hover:opacity-80 transition-opacity"
                >
                  −
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsExpanded(true)}
                className="ml-2 text-primary-white font-bold border border-primary-black rounded px-1.5 py-0.5 bg-transparent hover:opacity-80 transition-opacity"
              >
                +
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ResearchItem;

