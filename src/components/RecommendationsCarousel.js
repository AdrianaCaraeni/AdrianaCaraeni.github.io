import { useState, useEffect } from "react";

const RecommendationsCarousel = ({ recommendations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
    }, 5000); // Change recommendation every 5 seconds

    return () => clearInterval(interval);
  }, [recommendations.length]);

  const currentRec = recommendations[currentIndex];

  return (
    <div className="w-full max-w-4xl relative">
      {/* Recommendation Card */}
      <div className="self-stretch rounded-3xs box-border flex flex-col items-start justify-start py-[30px] pr-[25px] pl-[23px] gap-[20px] max-w-full text-primary-black font-heading-h6-semibold border-2 border-solid border-zinc-500 bg-gradient-to-br from-zinc-50 to-zinc-100 relative">
        {/* Large closing quote mark - top right */}
        <div className="absolute top-4 right-6 text-[120px] text-zinc-500 opacity-30 font-serif leading-none pointer-events-none">
          &quot;
        </div>

        {/* Top Section: Profile Picture, Name, Rating, Roles */}
        <div className="self-stretch flex flex-row items-start gap-4 relative z-10">
          {/* Profile Picture */}
          <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-4 border-solid border-zinc-400">
            <img
              src={currentRec.image}
              alt={currentRec.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name, Rating, Roles */}
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex flex-row items-center gap-3 flex-wrap">
              <h3 className="m-0 text-lg font-bold text-primary-black">
                {currentRec.name}
              </h3>
              <div className="flex flex-row items-center gap-1 ml-2">
                <span className="text-yellow-400 text-lg leading-none -mt-0.5">★</span>
                <span className="text-base font-semibold text-primary-black">5.0</span>
              </div>
            </div>

            {/* Roles Bar */}
            <div className="bg-zinc-200 px-4 py-2 rounded w-fit">
              <div className="text-sm text-primary-black">
                {currentRec.roles}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="self-stretch relative z-10">
          {/* Large opening quote mark - bottom left */}
          <div className="absolute -bottom-2 -left-2 text-[100px] text-zinc-500 opacity-30 font-serif leading-none pointer-events-none">
            &quot;
          </div>
          
          <div className="text-sm text-zinc-600 leading-relaxed pl-12">
            {currentRec.testimonial}
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex flex-row items-center justify-center gap-2 mt-6">
        {recommendations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-zinc-700 w-8' : 'bg-zinc-300 hover:bg-zinc-400'
            }`}
            aria-label={`Go to recommendation ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendationsCarousel;

