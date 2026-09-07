import React from 'react';
import Link from 'next/link';

const CallToAction: React.FC = () => {
  return (
    <section className="w-full px-20 mt-40">
      <div className="flex items-center justify-center">
        <div className="my-10 mb-30">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] text-black text-center font-medium tracking-[-1.5px] leading-[1.05] mb-3 ">
            Let's cronix handle your scheduled workflows.
          </h2>

          <div className="mt-auto md:mt-0 text-center">
            <p className="text-black/90 text-[19px] mb-6  leading-relaxed">
              Automate your recurring jobs and keep every workflow running on
              schedule.
            </p>

            <div>
              <Link
                href="/login"
                className="inline-flex items-center justify-center bg-[#232323] text-white px-5 py-2.5 rounded-[3px] text-[14px] font-medium  hover:bg-black transition-colors"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
