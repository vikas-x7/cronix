import Link from 'next/link';
import { TfiArrowTopRight } from 'react-icons/tfi';
import UseCases from './UseCases';

const Hero = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover pointer-events-none"
        >
          <source src="/videos/Hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Full height container with content aligned to bottom left */}
      <div className="relative z-10 h-full w-full max-w-[100rem] mx-auto flex flex-col justify-end items-start px-6 sm:px-12 lg:px-20 pb-12 sm:pb-16 lg:pb-20 text-white">
        <div className="flex flex-col items-start max-w-4xl">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[55px] tracking-[-1.5px] font-medium leading-[0.95] text-left  text-white "
          >
            Your backend tasks, running <br /> exactly when they should
          </h1>
          <p className="mt-4 text-sm sm:text-lg md:text-xl text-white max-w-2xl text-left ">
            Cronix handles your scheduled HTTP requests and gives <br /> you
            complete visibility into every execution
          </p>

          <div className="mt-6 flex items-center">
            <Link
              href="/login"
              className="text-[14px] sm:text-[16px] flex items-center px-5 p-1.5 gap-2 text-black bg-white hover:bg-white/90 transition-all shadow-lg rounded-full font-medium "
            >
              Getstart Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
