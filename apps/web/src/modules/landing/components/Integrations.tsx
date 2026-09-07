'use client';

import React from 'react';

interface Logo {
  name: string;
  src: string;
}

const Integrations = () => {
  const leftLogos = [
    { name: 'Salesforce', src: '/sdf' },
    {
      name: 'HubSpot',
      src: 'https://img.boltops.com/images/blog/vendor-logos/render.svg',
    },
    { name: 'Snowflake', src: 'd' },
    {
      name: 'Slack',
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Netlify_logo_%282%29.svg',
    },
    { name: 'BigQuery', src: 'd' },
    {
      name: 'Databricks',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvcI1hazt1ZIsbfEByA82O1GE1aBZTt1lDg&s',
    },
  ];

  const rightLogos = [
    { name: 'Zapier', src: 'd' },
    { name: 'Airtable', src: 'https://miro.medium.com/0*8cIwlw9H6gXJNaj9' },
    { name: 'Postgres', src: 'd' },
    {
      name: 'dbt',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs67hAn2a56_5X9hv1rmyEv8WHVXcX0MdZDQ&s',
    },
    { name: 'Zoho', src: 'd' },
    {
      name: 'Segment',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Heroku_logo.svg/960px-Heroku_logo.svg.png',
    },
  ];

  const shouldShow = (index: number, src: string) => {
    const pos = index % 6;
    return (pos === 1 || pos === 3 || pos === 5) && src !== 'd';
  };

  const Box = ({ logo, index }: { logo: Logo; index: number }) => (
    <div className="flex h-12 w-30 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-20 lg:w-70 items-center justify-center border border-black/15 border-dashed  bg-transparent p-3 sm:p-4 md:p-6  transition">
      {shouldShow(index, logo.src) && (
        <img
          src={logo.src}
          alt={logo.name}
          className="w-[50px] sm:w-[60px] md:w-[80px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
        />
      )}
    </div>
  );

  return (
    <section
      id="integration"
      className="bg-transparent py-12 sm:py-16 md:py-20 px-4 sm:px-20 min-h-[60vh] md:min-h-[70vh] flex items-center "
    >
      <div className="container mx-auto max-w-8xl text-start">
        <p className="mx-auto mt-2 text-sm sm:text-base md:text-[43px] text-black  tracking-[-1px] font-medium">
          Connect cronix to your infrastructure
        </p>
        <p className="text-black/90">
          Works with your existing deployments to schedule HTTP requests,
          trigger webhooks, and automate background jobs.
        </p>

        <div className="mt-10 sm:mt-14 md:mt-20 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-0">
          <div className="grid grid-cols-3 ">
            {leftLogos.map((logo, index) => (
              <Box key={index} logo={logo} index={index} />
            ))}
          </div>

          {/* <div className="z-10 flex h-16 w-30 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-10 lg:w-30 items-center justify-center bg-black text-white shadow-xl md:-mx-4">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl md:tracking-[-0.5px] font-medium">
              Get start 
            </h3>
          </div> */}

          <div className="grid grid-cols-3 ">
            {rightLogos.map((logo, index) => (
              <Box key={index} logo={logo} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
