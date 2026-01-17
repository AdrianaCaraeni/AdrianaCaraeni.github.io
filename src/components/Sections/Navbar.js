import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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

  const onResumeClick = useCallback(() => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Adriana_Caraeni_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <header className="self-stretch overflow-hidden flex flex-row items-center justify-center py-6 px-20 box-border max-w-full mq825:pl-10 mq825:pr-10 mq825:box-border">
      <div
        className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 px-8 box-border [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] gap-[20px] max-w-full mq825:hidden"
        data-animate-on-scroll
      >
        <Link to="/" className="cursor-pointer [border:none] py-0 pr-[17px] pl-0 bg-[transparent] flex flex-row items-center justify-start gap-[11px] no-underline">
          <img
            className="relative w-[22px] h-[22px]"
            loading="eager"
            alt=""
            src="/icon.svg"
          />
          <b className="relative text-xl tracking-[-0.02em] leading-[24px] capitalize font-heading-h6-semibold text-primary-black text-left whitespace-nowrap">{`Adriana Caraeni`}</b>
        </Link>
        <div className="flex flex-row items-center justify-start gap-[32px] ml-8 mq825:gap-[16px]">
          <Link
            to="/industry"
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start no-underline"
          >
            <div className="relative text-xl tracking-[-0.02em] leading-[24px] capitalize font-semibold font-heading-h6-semibold text-primary-black text-left">
              Industry
            </div>
          </Link>
          <Link
            to="/research"
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start no-underline"
          >
            <div className="relative text-xl tracking-[-0.02em] leading-[24px] capitalize font-semibold font-heading-h6-semibold text-primary-black text-left">
              Research
            </div>
          </Link>
          <Link
            to="/academics"
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start no-underline"
          >
            <div className="relative text-xl tracking-[-0.02em] leading-[24px] capitalize font-semibold font-heading-h6-semibold text-primary-black text-left">
              Academics
            </div>
          </Link>
        </div>
        <button
          className="cursor-pointer [border:none] py-4 px-5 bg-primary-black rounded flex flex-row items-center justify-center gap-[8px] hover:bg-darkslategray"
          onClick={onResumeClick}
        >
          <div className="relative text-xl tracking-[0.02em] leading-[24px] font-semibold font-heading-h6-semibold text-primary-white text-left">
            Resume
          </div>
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0"
            alt=""
            src="/download.svg"
          />
        </button>
        <img
          className="relative w-9 h-9 overflow-hidden shrink-0 hidden"
          alt=""
          src="/materialsymbolsmenu.svg"
        />
      </div>
    </header>
  );
};

export default Navbar;
