import BannerSection from "@/components/home/BannerSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import Skills from "@/components/home/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Michel Btompe</title>
        <meta
          name="description"
          content="Porfolio of Michel Btompe. Hier you get more information about me and my stack tools and technologies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerSection />
      <ProjectsSection />
      <Skills />
    </>
  );
}
