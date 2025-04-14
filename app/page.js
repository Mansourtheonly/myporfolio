import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Whoami from "@/components/Whoami";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Whoami />
      <main className="max-w-screen-xl mx-auto mt-10  px-8 w-full">
        <Header />
        <Contacts />
        <About />
        <Skills />
        <Work />
        <Projects />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
