import Link from "next/link";
import React, { useState, useRef } from "react";
import { getPosts, getPortfolioItems } from "../utils/utils";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout, { GradientBackground } from "../components/Layout";
import { getGlobalData } from "../utils/global-data";
import SEO from "../components/SEO";
import { SplitLayout } from "../components/SplitLayout";
import Experience from "../components/Experience/index";
import About from "../components/About";
import Projects from "../components/Projects/Projects";
import { projects } from "../components/Projects/data";
import Section from "../components/Section";
import { useInView, InView } from "react-intersection-observer";

export default function Index({ portfolioItems, globalData }) {
  const sections = [
    {
      title: "About",
      children: <About />,
    },
    {
      title: "Experience",
      children: <Experience jobs={portfolioItems} />,
    },
    {
      title: "Projects",
      children: <Projects projects={projects} />,
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.5 });

  const [activeSection, setActiveSection] = useState(sections[0].title);

  const setInView = (inView, entry) => {
    if (inView) {
      console.log(entry);
      setActiveSection(entry.target.getAttribute("id"));
    }
  };

  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <SplitLayout classlist={"col-start-1 md:col-end-5 md:row-span-12"}>
        <Header
          name={globalData.name}
          navItems={globalData.navigation}
          setSection={setActiveSection}
          active={activeSection}
        />
      </SplitLayout>

      <SplitLayout
        classlist={
          "md:col-start-5 md:col-end-13 md:row-span-12 md:overflow-auto"
        }
      >
        <main className="container" ref={ref}>
          {sections.map((section) => (
            <InView onChange={setInView} threshold={0.5} key={section.title}>
              {({ ref }) => {
                return (
                  <Section
                    id={section.title}
                    sectionRef={ref}
                    active={activeSection === section.title}
                  >
                    {section.children}
                  </Section>
                );
              }}
            </InView>
          ))}
        </main>
        <Footer copyrightText={globalData.footerText} />
      </SplitLayout>

      {/* <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      /> */}
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();
  const portfolioItems = getPortfolioItems();

  return { props: { portfolioItems, globalData } };
}
