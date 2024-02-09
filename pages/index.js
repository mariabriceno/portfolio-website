import Link from "next/link";
import React, { useState } from "react";
import { getPosts, getPortfolioItems } from "../utils/utils";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout, { GradientBackground } from "../components/Layout";
import { getGlobalData } from "../utils/global-data";
import SEO from "../components/SEO";
import { SplitLayout } from "../components/SplitLayout";
import Experience from "../components/Experience/index";
import About from "../components/About";

export default function Index({ portfolioItems, globalData }) {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />

      <SplitLayout
        side={"left"}
        classlist={"col-start-1 col-end-5 row-span-12"}
        open={open}
      >
        <Header name={globalData.name} />
      </SplitLayout>
      {/* <button className="absolute" onClick={handleToggle}>
        click
      </button> */}
      <SplitLayout
        side={"right"}
        classlist={"col-start-5 col-end-13 row-span-12 overflow-auto"}
        open={open}
      >
        <main className="container">
          <About />
          <Experience jobs={portfolioItems} />
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
