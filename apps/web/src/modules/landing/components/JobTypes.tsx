import React from 'react';

const companies = [
  'Cron Jobs',
  'Webhooks',
  'APIs',
  'Data Sync',
  'Notification',
  'Reports',
  ' Automation ',
  'Background Jobs',
];

const JobTypes: React.FC = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-8 lg:px-20 ">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="text-[18px] text-black/80 mb-10 text-center font-medium">
          The infrastructure behind every scheduled task and automated workflow
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 sm:gap-x-24 sm:gap-y-12 items-center justify-items-center w-full max-w-4xl">
          {companies.map((company, idx) => (
            <div
              key={idx}
              className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-[-0.5px] hover:text-neutral-600 transition-colors cursor-default"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobTypes;
