import Grid from "@/components/Grid";
import Inicio from "@/components/Inicio";
import Projetos from "@/components/Projetos";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <h1 className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome />}
        ]}/>
        <Inicio />
        <Grid />
        <Projetos />
      </h1>
    </div>
  );
}
