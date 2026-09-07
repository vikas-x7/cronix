'use client';

import { IoMdAdd } from 'react-icons/io';

const CARDS_DATA = [
  {
    image: 'gif/cronixcard.gif',
    title: 'Zero infrastructure needed',
    features: [
      'Deploy and run scheduled jobs without managing servers or cron daemons.',
      'Scale automatically as your workloads grow with no infrastructure overhead.',
      'Focus on building your application while Cronix handles the scheduling.',
      'Get started in minutes with a fully managed and reliable platform.',
    ],
  },
  {
    image: 'gif/cronixcard.gif',
    title: 'Real-time execution logs',
    features: [
      'Track every execution with detailed request and response logs.',
      'Instantly identify failed jobs and understand why they failed.',
      'View execution history with timestamps, duration, and status.',
      'Debug issues faster with centralized logs in a single dashboard.',
    ],
  },
  {
    image: 'gif/cronixcard.gif',
    title: 'Flexible API triggers',
    features: [
      'Trigger any scheduled job instantly through a simple and secure REST API with just a single request.',
      'Send dynamic payloads, custom headers, and request parameters to customize every execution.',
      'Manually run jobs, update cron schedules, or pause and resume workflows whenever you need.',
      'Connect seamlessly with webhooks, CI/CD pipelines, third-party APIs, and your existing backend services.',
    ],
  },
];

const STATS_DATA = [
  {
    value: 'cron jobs',
    description: 'Create and manage recurring schedules with ease.',
  },
  {
    value: 'real-time logs',
    description: 'Track every execution and debug failures quickly.',
  },
  {
    value: 'one dashboard',
    description:
      'Control your jobs, triggers, and execution history from one place.',
  },
];

export default function Feature() {
  return (
    <section id="features" className="bg-transparent">
      <div className="grid grid-cols-1 border-t-0 border border-zinc-200 md:grid-cols-3">
        {CARDS_DATA.map((card, index) => (
          <div
            key={index}
            className="flex min-h-[400px] md:min-h-[620px] flex-col border-b md:border-b-0 md:border-r border-zinc-200 last:border-b-0 last:border-r-0"
          >
            <div className="relative flex-1 border-b border-zinc-200 flex items-center justify-center p-6"></div>

            <div className="p-5 sm:p-6 md:p-8">
              <div className="flex items-center gap-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-16 sm:w-14 object-contain"
                />
                <h3 className="text-3xl font-medium tracking-[-1px]">
                  {card.title}
                </h3>
              </div>

              <div className="mt-4 flex flex-col px-5">
                {card.features.map((feature, fIndex) => (
                  <p
                    key={fIndex}
                    className="mt-2 text-[15px] border-b border-dashed border-black/20 py-4 text-black/80 flex items-center gap-4 tracking-[-0.5px]"
                  >
                    <span className="shrink-0">
                      <IoMdAdd size={20} />
                    </span>
                    <span>{feature}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border border-zinc-200 border-t-0">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {STATS_DATA.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 sm:p-10 border-b md:border-b-0 md:border-r border-zinc-200 last:border-b-0 last:border-r-0"
            >
              <h3 className="text-3xl sm:text-4xl font-medium tracking-[-1px]">
                {stat.value}
              </h3>
              <p className="mt-3 text-[15px] text-black/60 tracking-[-0.5px] max-w-[280px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
