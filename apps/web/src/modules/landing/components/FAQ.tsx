'use client';

import Image from 'next/image';
import { useState } from 'react';
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
  {
    question: 'What is Cronix?',
    answer:
      'Cronix is a fully managed job scheduler that lets you automate workflows, trigger APIs, and monitor job runs from one powerful dashboard.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="w-full py-12 sm:py-16 px-4 md:px-10 lg:px-20 mt-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-start">
        <div className="  w-full">
          <h2 className="text-3xl sm:text-4xl font-medium lg:text-[44px] text-black - mb-8 sm:mb-10">
            Frequently Asked Questions
          </h2>

          <p className="mt-65 ">
            Everything you need to know about scheduling, monitoring, and
            scaling your automated tasks with Cronix.
          </p>
        </div>

        <div className="relative rounded-[5px] overflow-hidden  w-full mt-8 lg:mt-0">
          <div className="border-t border-black/10 border-dashed   w-full">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="border-b px-4 border-black/10 border-dashed  cursor-pointer py-2"
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              >
                <div className="flex items-center justify-between py-4">
                  <span
                    className={`font-medium  text-base sm:text-[18px] transition-colors duration-200 ${activeIndex === i ? 'text-black' : 'text-black/90'}`}
                  >
                    {f.question}
                  </span>
                  <IoIosArrowDown />
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === i ? 'max-h-60 pb-4' : 'max-h-0'}`}
                >
                  <p className="text-black text-sm sm:text-[17px] leading-relaxed">
                    {f.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
