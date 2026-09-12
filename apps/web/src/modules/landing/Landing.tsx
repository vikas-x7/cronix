import React from 'react';
import { urbanist } from '@/shared/fonts';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import WorkflowCards from './components/WorkflowCards';
import JobTypes from './components/JobTypes';
import CoreFeatures from './components/CoreFeatures';
import ExecutionChart from './components/ExecutionChart';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import Marquee from './components/Marquee';
import FAQSection from './components/FAQSection';
import Stats from './components/Stats';
export default function Landing() {
  return (
    <div
      className={`landing-page w-full overflow-x-hidden ${urbanist.className} ${urbanist.variable}`}
    >
      <Navbar />
      <Hero />
      <div className="w-full max-w-[100rem] mx-auto">
        <JobTypes />
        <WorkflowCards />
        <Stats />
        <Marquee />
        <ExecutionChart />
        <CoreFeatures />
        <Integrations />
        <FAQSection />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}
