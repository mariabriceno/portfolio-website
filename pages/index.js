import Link from "next/link";
import { getPosts, getJobs } from "../utils/utils";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout, { GradientBackground } from "../components/Layout";
// import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from "../utils/global-data";
import SEO from "../components/SEO";
import { SplitLayout } from "../components/SplitLayout";
import Experience from "../components/Experience/index";

export default function Index({ posts, jobs, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />

      <SplitLayout side={"left"}>
        <Header name={globalData.name} />
      </SplitLayout>

      <SplitLayout side={"right"}>
        <main className="container my-10 overscroll-contain">
          <Experience {...{ jobs }} />
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
  const jobs = getJobs();

  return { props: { posts, jobs, globalData } };
}
