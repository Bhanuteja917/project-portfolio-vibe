
import Layout from "@/components/Layout";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </Layout>
  );
};

export default Index;
