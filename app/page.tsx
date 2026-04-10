import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Principles from "./components/Principles";
import TechnicalDepth from "./components/TechnicalDepth";
import Timeline from "./components/Timeline";
import WorkWithMe from "./components/WorkWithMe";
import Footer from "./components/Footer";
import type { AboutData, Project, TimelineEntry, Principle } from "./types";

import aboutData from "../content/about.json";
import projectsData from "../content/projects.json";
import timelineData from "../content/timeline.json";
import principlesData from "../content/principles.json";

export default function Home() {
  const about = aboutData as AboutData;
  const projects = projectsData as unknown as Project[];
  const timeline = timelineData as TimelineEntry[];
  const principles = principlesData as Principle[];

  return (
    <main>
      <Nav />
      <Hero about={about} projects={projects} />
      <Projects projects={projects} />
      <Principles principles={principles} />
      <TechnicalDepth />
      <Timeline entries={timeline} />
      <WorkWithMe about={about} />
      <Footer about={about} />
    </main>
  );
}
