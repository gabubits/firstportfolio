import Inicio from "@/components/Inicio";

export default function Home() {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <h1 className="max-w-7xl w-full">
        <Inicio />
      </h1>
    </div>
  );
}
