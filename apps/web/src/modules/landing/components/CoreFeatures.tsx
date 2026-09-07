'use client';

import React from 'react';

export interface EnterpriseFeature {
  id: string;
  title: string;
  description: string;
}

const FEATURES: EnterpriseFeature[] = [
  {
    id: 'reliable-execution',
    title: 'Reliable Execution',
    description:
      'Run scheduled jobs consistently with reliable execution and automatic handling of failed requests.',
  },
  {
    id: 'complete-visibility',
    title: 'Complete Visibility',
    description:
      'Monitor every execution with detailed status, logs, response data, and execution history.',
  },
  {
    id: 'flexible-scheduling',
    title: 'Flexible Scheduling',
    description:
      'Create custom cron schedules, trigger jobs manually, and update your workflows whenever needed.',
  },
  {
    id: 'built-to-scale',
    title: 'Built to Scale',
    description:
      'Handle growing workloads with reliable job scheduling without managing additional infrastructure.',
  },
];

const CoreFeatures: React.FC = () => {
  return (
    <section className="w-full bg-white text-black  px-4 sm:px-8 lg:px-20 my-30">
      <div className="">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-5xl lg:text-[40px] tracking-[-2px] sm:tracking-[-1px] text-black leading-tight font-medium">
            Automation infrastructure
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-black/90 max-w-xl font-normal leading-relaxed">
            Everything you need to run, monitor, and manage scheduled workflows
            with confidence.
          </p>
        </div>

        {/* 2x2 Grid of Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="bg-black/2 flex flex-col justify-center p-10 transition-all duration-300 hover:bg-[#F5F3EB]"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-normal text-black tracking-[-0.px] mb-3 leading-snug">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-black/90 font-normal max-w-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
