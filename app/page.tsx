import Contact from "@/components/Contact";
import Habilities from "@/components/Habilities";
import Initial from "@/components/Initial";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <h1 className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Initial />
        <Habilities />
        <Projects />
        <Contact />
      </h1>
    </div>
  );
}
