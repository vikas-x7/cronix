'use client';

import React from 'react';
import Image from 'next/image';

export interface WorkCardItem {
  id: string;
  title: string;
  badge?: {
    text: string;
    icon?: string;
  };
  description: string;
  imageUrl?: string;
}

const CARDS: WorkCardItem[] = [
  {
    id: 'Background Jobs',
    title: 'Background Jobs',

    description:
      'Run recurring tasks like cleanup jobs, data processing, report generation, and scheduled maintenance automatically.',
    imageUrl: '/image/image1.avif',
  },
  {
    id: 'API Automation',
    title: 'API Automation',

    description:
      'Schedule HTTP requests, sync data between services, and trigger external APIs when needed.',
    imageUrl: '/image/image2.avif',
  },
  {
    id: 'Webhooks & Workflows',
    title: 'Webhooks & Workflows',
    description:
      'Trigger jobs through webhooks, connect services, and automate recurring workflows.',
    imageUrl: '/image/image3.avif',
  },
];

const WorkflowCards: React.FC = () => {
  return (
    <section className="w-full text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-20">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-[40px] font-medium tracking-[-1px]">
            Where cronix fits into your workflow
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text- text-[#474747] max-w-xl font-medium">
            From background jobs to automated API workflows, Cronix keeps your
            recurring tasks running reliably without the infrastructure
            overhead.
          </p>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CARDS.map((card) => (
            <div key={card.id} className="flex flex-col group cursor-pointer">
              {/* Image Container Box */}
              <div className="relative aspect-[4/4.5] sm:aspect-[4/4.8] w-full overflow-hidden  p-4 flex flex-col justify-between transition-all duration-300 group-hover:border-neutral-700">
                {/* Image Rendering */}
                {card.imageUrl && (
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover z-0"
                  />
                )}

                {/* Gradient overlay for text contrast */}

                {/* Top Badge Container */}
                <div className="relative z-10 min-h-[36px] flex items-center justify-center"></div>

                {/* Bottom Overlay Title Inside Card */}
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white font-medium tracking-[-1px]">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Description Below Card */}
              <p className="mt-4 text-[13px] sm:text-[14px] lg:text-[16px] text-black font-medium">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowCards;
