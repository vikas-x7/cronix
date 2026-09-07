'use client';

export default function ExecutionChart() {
  const bars = [
    { base: 40, top: 10 },
    { base: 40, top: 10 },
    { base: 60, top: 0 },
    { base: 40, middle: 10, top: 0 },
    { base: 40, top: 10 },
    { base: 25, top: 0 },
    { base: 55, top: 10, extra: 10 },
    { base: 65, top: 0, highlight: 20 },
    { base: 55, top: 10, extra: 10 },
    { base: 40, top: 10 },
    { base: 25, top: 0 },
    { base: 15, top: 10 },
    { base: 25, top: 0 },
  ];

  const heightStyle = (val: number) =>
    ({
      '--h-mobile': `${val * 2}px`,
      '--h-sm': `${val * 3}px`,
      '--h-md': `${val * 4}px`,
      height: 'var(--h-mobile)',
    }) as React.CSSProperties;

  return (
    <>
      <style>{`
        @media (min-width: 640px) {
          .bar-seg { height: var(--h-sm) !important; }
        }
        @media (min-width: 768px) {
          .bar-seg { height: var(--h-md) !important; }
        }
      `}</style>

      <section id="observe" className="relative overflow-hidden px-20">
        {/* <div className="inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="border-b border-black/20"
              style={{ height: '4%' }}
            />
          ))}
        </div> */}

        <div className="relative z-10">
          <div className="mt-10 sm:mt-14 md:mt-20 flex h-[200px] sm:h-[300px] md:h-[420px] items-end justify-between gap-[3px] sm:gap-1.5 md:gap-3">
            {bars.map((bar, index) => {
              const total =
                (bar.base || 0) +
                (bar.middle || 0) +
                (bar.top || 0) +
                (bar.extra || 0) +
                (bar.highlight || 0);

              return (
                <div
                  key={index}
                  className="group relative flex w-full flex-col justify-end cursor-pointer"
                >
                  <div
                    className="
                    absolute bottom-full mb-2 left-1/2 -translate-x-1/2
                    opacity-0 translate-y-1
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-200 ease-out
                    bg-black text-white text-[10px] sm:text-xs font-medium
                    px-1.5 py-0.5 sm:px-2 sm:py-1
                    rounded-[5px] pointer-events-none z-20 whitespace-nowrap
                  "
                  >
                    {total * 12}
                  </div>

                  <div className="relative flex w-full flex-col justify-end overflow-hidden rounded-t-[2px]">
                    <div className="absolute bottom-0 left-0 w-full bg-[#DF71D0] h-0 group-hover:h-full transition-all duration-500 ease-out z-10 pointer-events-none" />

                    <div
                      className="bar-seg bg-[#191919] w-full relative z-0"
                      style={heightStyle(bar.base)}
                    />
                    {bar.middle ? (
                      <div
                        className="bar-seg bg-gray-400 w-full relative z-0"
                        style={heightStyle(bar.middle)}
                      />
                    ) : null}
                    {(bar.top ?? 0) > 0 && (
                      <div
                        className="bar-seg bg-black/90 w-full relative z-0"
                        style={heightStyle(bar.top!)}
                      />
                    )}
                    {bar.extra ? (
                      <div
                        className="bar-seg bg-[#61B3C9] w-full relative z-0"
                        style={heightStyle(bar.extra)}
                      />
                    ) : null}
                    {bar.highlight ? (
                      <div
                        className="bar-seg bg-lime-300 w-full relative z-0"
                        style={heightStyle(bar.highlight)}
                      />
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
