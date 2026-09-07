import { MdOutlineArrowOutward } from 'react-icons/md';

const styles = `
  @keyframes flow {
    0% { stroke-dashoffset: 24; }
    100% { stroke-dashoffset: 0; }
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
  .flow-line {
    stroke-dasharray: 8 4;
    animation: flow 4s linear infinite;
  }
  .flow-dot {
    animation: pulse-dot 2s ease-in-out infinite;
  }
`;

export default function Getstart() {
  return (
    <div className="relative  h-[70vh] mt-40 overflow-hidden bg-white text-black font-cabin">
      <style>{styles}</style>
      <div className="absolute inset-0 z-10 flex flex-col  items-center justify-center px-4 text-center">
        {/* <div className="relative inline-block p-2 sm:p-3 md:p-4">
          <span className="absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-black/60 sm:h-4 sm:w-4" />
          <span className="absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-black/60 sm:h-4 sm:w-4" />
          <span className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-black/60 sm:h-4 sm:w-4" />
          <span className="absolute right-0 bottom-0 h-3 w-3 border-r-2 border-b-2 border-black/60 sm:h-4 sm:w-4" />

          <h1 className="border border-dashed border-black/40 px-5 py-4 pr-4 text-[32px] leading-none font-bold -tracking-[1px] sm:px-4 sm:py-10 sm:pr-5 sm:text-[60px] md:px-5 md:py-13 md:pr-7 md:text-[130px] md:leading-10 md:-tracking-[14px] text-black/90">
            Getstart with Cronix
          </h1>
        </div> */}

        <p className="mt-6 max-w-4xl text-sm text-black/90 sm:text-base md:text-lg ">
          Automate your HTTP jobs in minutes. Deploy on your own infrastructure,
          connect your services, and let Cronix handle the scheduling, retries,
          and monitoring all from a single dashboard.
        </p>

        <div className="mt-16 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-center sm:gap-0">
          <div className="flex flex-col items-center gap-2 px-4 ">
            <span className="relative flex h-10 w-10 items-center justify-center border border-black/20 text-sm font-bold">
              1
            </span>
            <h3 className="text-sm font-medium tracking-[-0.5px]">
              Create a Job
            </h3>
            <p className="max-w-70 text-sm text-black/70 tracking-[-0.5px]">
              Define a cron expression, pick your HTTP method, URL, headers, and
              request body all in one form.
            </p>
          </div>

          <div className="relative hidden sm:flex sm:w-20 items-center justify-center">
            <svg width="80" height="24" className="overflow-visible">
              <line
                x1="0"
                y1="12"
                x2="80"
                y2="12"
                stroke="black"
                strokeWidth="1"
                className="flow-line"
              />
              <circle cx="0" cy="12" r="3" fill="black" className="flow-dot" />
            </svg>
          </div>

          <div className="flex flex-col items-center gap-2 px-4">
            <span className="relative flex h-10 w-10 items-center justify-center border border-black/20 text-sm font-bold">
              2
            </span>
            <h3 className="text-sm font-medium tracking-[-0.5px]">
              Configure Triggers
            </h3>
            <p className="max-w-70 text-sm text-black/70 tracking-[-0.5px]">
              Set retry policies, timeouts, email alerts on failure, and
              optionally expose a webhook URL for on-demand execution.
            </p>
          </div>

          <div className="relative hidden sm:flex sm:w-20 items-center justify-center">
            <svg width="80" height="24" className="overflow-visible">
              <line
                x1="0"
                y1="12"
                x2="80"
                y2="12"
                stroke="black"
                strokeWidth="1"
                className="flow-line"
              />
              <circle cx="0" cy="12" r="3" fill="black" className="flow-dot" />
            </svg>
          </div>

          <div className="flex flex-col items-center gap-2 px-4">
            <span className="relative flex h-10 w-10 items-center justify-center border border-black/20 text-sm font-bold">
              3
            </span>
            <h3 className="text-sm font-medium tracking-[-0.5px] ">
              Monitor & Relax
            </h3>
            <p className="max-w-70 text-sm text-black/70 tracking-[-0.5px]">
              Track every execution in real time status codes, duration, retry
              history, and success rates on the dashboard.
            </p>
          </div>
        </div>
        {/* 
        <a
          href="/login"
          className="mt-10  rounded-[3px] border border-black/20  px-4 py-1 text-[17px] font-medium transition-colors hover:bg-black hover:text-white flex items-center gap-2"
        >
          Set your first cron job <MdOutlineArrowOutward size={27} />
        </a> */}
      </div>
    </div>
  );
}
