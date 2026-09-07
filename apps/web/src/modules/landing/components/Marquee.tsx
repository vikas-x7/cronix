'use client';

import { PiDotOutlineFill } from 'react-icons/pi';

const marqueeItemsData = [
  {
    name: 'Schedule HTTP requests with cron expressions  ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Trigger jobs instantly via webhook URLs ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Track every execution with detailed logs ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Organize jobs into workspaces ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Automatic retries with configurable delays ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Email alerts on job failure ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Dashboard with real-time stats and analytics ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Self-hosted and fully open source ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },

  {
    name: 'Schedule HTTP requests with cron expressions  ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Trigger jobs instantly via webhook URLs ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Track every execution with detailed logs ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Organize jobs into workspaces ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Automatic retries with configurable delays ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Email alerts on job failure ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Dashboard with real-time stats and analytics ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Self-hosted and fully open source ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Schedule HTTP requests with cron expressions  ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Trigger jobs instantly via webhook URLs ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Track every execution with detailed logs ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Organize jobs into workspaces ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Automatic retries with configurable delays ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Email alerts on job failure ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Dashboard with real-time stats and analytics ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Self-hosted and fully open source ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Schedule HTTP requests with cron expressions  ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Trigger jobs instantly via webhook URLs ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Track every execution with detailed logs ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Organize jobs into workspaces ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Automatic retries with configurable delays ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Email alerts on job failure ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Dashboard with real-time stats and analytics ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Self-hosted and fully open source ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Schedule HTTP requests with cron expressions  ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Trigger jobs instantly via webhook URLs ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Track every execution with detailed logs ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Organize jobs into workspaces ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Automatic retries with configurable delays ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Email alerts on job failure ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Dashboard with real-time stats and analytics ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
  {
    name: 'Self-hosted and fully open source ',
    src: 'https://thesvg.org/icons/gemini/default.svg',
  },
];

export default function Marquee() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-loop {
          display: flex;
          width: max-content;
          animation: marquee 240s linear infinite;
        }
      `}</style>

      <section className="w-full overflow-hidden  bg-[#1C1A16]  font-cabin ">
        <div className="relative w-full overflow-hidden ">
          <div className="animate-marquee-loop">
            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex shrink-0 items-center  pr-16"
                aria-hidden={group === 1}
              >
                {marqueeItemsData.map((item, i) => (
                  <div
                    key={`${group}-${i}`}
                    className="flex shrink-0 items-center justify-center transition-opacity duration-300 hover:opacity-100"
                  >
                    {' '}
                    <span className="text-white">
                      <PiDotOutlineFill size={45} />
                    </span>
                    <span className="text-[13px]  text-white md:text-[14px] ">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
