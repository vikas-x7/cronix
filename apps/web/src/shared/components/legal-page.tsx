'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BiSolidSquare } from 'react-icons/bi';
import { FiArrowLeft } from 'react-icons/fi';

interface LegalSection {
  heading: string;
  description?: string;
  points?: string[];
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export default function LegalPage({
  title,
  lastUpdated,
  intro,
  sections,
}: LegalPageProps) {
  const router = useRouter();

  const goBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="w-full max-w-3xl mx-auto px-6 py-12 sm:py-16">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center">
            <BiSolidSquare size={30} className="text-[#DF5BCC]" />
            <span className="text-2xl font-semibold tracking-[-1px] ml-2">
              Cronix.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={goBack}
              className="inline-flex items-center gap-2 text-[13px] text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <FiArrowLeft size={14} />
              Back
            </button>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-medium tracking-[-1.5px] leading-tight">
          {title}
        </h1>
        <p className="mt-3 text-[12px] text-neutral-500 uppercase tracking-[1px]">
          Last updated: {lastUpdated}
        </p>

        <p className="mt-8 text-[15px] leading-relaxed text-neutral-300">
          {intro}
        </p>

        <div className="mt-12 space-y-12">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl sm:text-2xl font-medium tracking-[-0.5px] mb-4">
                {section.heading}
              </h2>
              {section.description && (
                <p className="text-[14px] leading-relaxed text-neutral-400 mb-4">
                  {section.description}
                </p>
              )}
              {section.points && (
                <ul className="space-y-3">
                  {section.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-[14px] leading-relaxed text-neutral-400"
                    >
                      <span className="text-[#DF5BCC] shrink-0 mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-neutral-600">
          <p>©{new Date().getFullYear()} Cronix. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-neutral-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-neutral-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/website-terms-of-use"
              className="hover:text-neutral-400 transition-colors"
            >
              Website Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
