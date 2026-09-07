'use client';

import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const faqs = [
  {
    question: 'What is Cronix?',
    answer:
      'Cronix is a fully managed job scheduler that lets you automate workflows, trigger APIs, and monitor job runs from one powerful dashboard.',
  },
  {
    question: 'How do I schedule a new job?',
    answer:
      'You can schedule a new job directly from the dashboard or by using our flexible API to define cron expressions and dynamic payloads.',
  },
  {
    question: 'Does Cronix support webhooks?',
    answer:
      'Yes! Cronix seamlessly integrates with webhooks so you can trigger HTTP endpoints securely and connect with any system.',
  },
  {
    question: 'Can I monitor execution history?',
    answer:
      'Absolutely. Cronix provides real-time execution logs where you can view console outputs, track uptime, and debug failures instantly.',
  },
  {
    question: 'Is there a limit on jobs?',
    answer:
      'Our platform is built for scale and precision, easily handling over 20k+ jobs executed with 99.9% uptime guaranteed. Check out our pricing for specific tier limits.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white text-black py-12 lg:py-16 px-6 sm:px-12 lg:px-20 ">
      <div className="flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-16">
        {/* Left Column: Heading & FAQ Accordion */}
        <div className="flex-1 flex flex-col justify-between space-y-8">
          <div>
            <h2 className="text-3xl sm:text-5xl leading-tight tracking-[-1.5px] sm:tracking-[-1px] font-medium mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-black/90 text-sm sm:text-[16px] mb-6 sm:mb-8 ">
              Branching, and managing your visual chats with Relic AI. Got any
              questions?
            </p>
            <button className="flex items-stretch group hover:opacity-80 transition-opacity">
              <div className="bg-transparent px-3 py-2 border border-black flex items-center justify-center">
                <span className="w-2.5 h-3 bg-black"></span>
              </div>
              <div className="bg-[#111] text-white px-5 py-2 text-sm font-light border border-[#111]">
                Contact Us
              </div>
            </button>
          </div>

          <div className="w-full">
            <div className="relative rounded-[5px] overflow-hidden w-full mt-4">
              <div className="border-t border-black/10 border-dashed w-full">
                {faqs.map((f, i) => (
                  <div
                    key={i}
                    className="border-b px-2 sm:px-4 border-black/10 border-dashed cursor-pointer py-1"
                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  >
                    <div className="flex items-center justify-between py-3.5">
                      <span
                        className={`font-medium text-base sm:text-[18px] transition-colors duration-200 ${
                          activeIndex === i
                            ? 'text-black font-semibold'
                            : 'text-black/90'
                        }`}
                      >
                        {f.question}
                      </span>
                      <IoIosArrowDown
                        className={`transition-transform duration-200 text-black/70 ${
                          activeIndex === i ? 'rotate-180' : ''
                        }`}
                      />
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        activeIndex === i ? 'max-h-60 pb-4' : 'max-h-0'
                      }`}
                    >
                      <p className="text-neutral-700 text-sm sm:text-[16px] leading-relaxed">
                        {f.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Image */}
        <div className="w-full lg:w-1/2 overflow-hidden h-[70vh]">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.prod.website-files.com/6812d02840d393aa2c663370/68f7be903d5e939249ef4dab_6ad532de28b288f9a07b16c9b42376ce_hyperline-pattern.svg"
            alt="Cronix platform scene"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
