import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden" style={{backgroundColor: '#E3DAC9'}}>
      {/* Paper background with grid - larger squares */}
      <div className="absolute inset-0 opacity-[0.1]">
        <div className="h-full w-full bg-[linear-gradient(90deg,#000_1.5px,transparent_1.5px),linear-gradient(#000_1.5px,transparent_1.5px)] bg-[size:60px_60px] font-handwritten animate-grid-move" style={{fontFamily: 'Caveat, "Comic Sans MS", cursive, sans-serif'}}></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        {/* Portfolio title with yellow background behind left 'O' */}
        <div className="mb-16 text-center relative -mt-52">
          <h2 className="font-serif text-[300px] leading-none font-bold tracking-[-4px] text-[#111] relative z-10">
            {/* Yellow background positioned behind the first 'O' */}
            <span className="relative">
              Portf
              <span className="relative inline-block">
                  <div className="absolute left-0 top-28 transform -translate-y-1/2 translate-x-4 translate-y-1 w-30 h-40 bg-[#FFC700] rounded-full opacity-90 pointer-events-none"></div>
                <span className="relative z-10">o</span>
              </span>
              lio
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

