import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/ForgeMind/Navbar";
import { Footer } from "@/components/ForgeMind/Footer";
import { Hero } from "@/components/ForgeMind/Hero";
import { Problem } from "@/components/ForgeMind/Problem";
import { HowItWorks } from "@/components/ForgeMind/HowItWorks";
import { Architecture } from "@/components/ForgeMind/Architecture";
import { FlowChart } from "@/components/ForgeMind/FlowChart";
import { Principles } from "@/components/ForgeMind/Principles";
import { DataModel } from "@/components/ForgeMind/DataModel";
import { Roadmap } from "@/components/ForgeMind/Roadmap";
import { CTA } from "@/components/ForgeMind/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ForgeMind — Multi-Agent DevOps Copilot" },
      {
        name: "description",
        content:
          "An autonomous multi-agent engineering control plane that understands, monitors, and coordinates the entire software delivery lifecycle.",
      },
      {
        name: "keywords",
        content:
          "ForgeMind, AI, DevOps, Multi-Agent, Engineering, Control Plane, Autonomous",
      },
      {
        property: "og:title",
        content: "ForgeMind — Multi-Agent DevOps Copilot",
      },
      {
        property: "og:description",
        content: "Autonomous multi-agent control plane for software delivery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Architecture />
        <FlowChart />
        <Principles />
        <DataModel />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}