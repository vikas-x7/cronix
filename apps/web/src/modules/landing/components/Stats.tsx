import React from 'react';
import { FiPlus, FiCircle, FiCheck, FiSquare } from 'react-icons/fi';

export default function Stats() {
  return (
    <section className="w-full text-black py-14 sm:py-20 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden p">
      <div className=" mx-auto px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 sm:mb-16 gap-5 sm:gap-8">
          <div>
            <h2 className="text-4xl sm:text-6xl tracking-normal ">Reliable </h2>
          </div>

          <div className="max-w-2xl lg:text-right">
            <p className="text-base sm:text-[19px] text-black ">
              Everything you need to schedule, trigger, and monitor your
              background jobs in one simple platform.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-[17px] font-medium text-black tracking-normal">
              <li className="flex items-center gap-2">
                <span className="text-base text-black ">
                  <FiSquare size={17} />
                </span>{' '}
                Cron scheduling
              </li>
              <li className="flex items-center gap-3">
                <span className="text-sm text-black">
                  <FiSquare size={17} />
                </span>{' '}
                http requests
              </li>
              <li className="flex items-center gap-3">
                <span className="text-sm text-black">
                  <FiSquare size={17} />
                </span>{' '}
                webhook triggers
              </li>
              <li className="flex items-center gap-3">
                <span className="text-sm text-black">
                  <FiSquare size={17} />
                </span>{' '}
                execution monitoring
              </li>
            </ul>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-6 sm:p-8 border border-black/10 flex flex-col justify-between min-h-52 sm:min-h-72">
              <div className="text-4xl sm:text-5xl font-normal tracking-normal text-black">
                99.9%
              </div>
              <p className="text-sm text-black/90 font-normal leading-relaxed">
                Reliable job execution with automated scheduling and retries.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 border border-black/10 flex flex-col justify-between min-h-52 sm:min-h-72">
              <div className="text-4xl sm:text-5xl font-normal tracking-normal text-black">
                24/7
              </div>
              <p className="text-sm text-black/90 font-normal leading-relaxed">
                Monitor your scheduled jobs and executions around the clock.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 border border-black/10 flex flex-col justify-between min-h-52 sm:min-h-72">
              <div className="text-4xl sm:text-5xl font-normal tracking-normal text-black">
                1 k+
              </div>
              <p className="text-sm text-black/90 font-normal leading-relaxed">
                Scheduled jobs successfully executed and handled by Cronix.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
