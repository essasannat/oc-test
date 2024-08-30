import Image from "next/image";
import { FaBeer } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-6xl">
        {" "}
        Hello Openshift <FaBeer />
      </div>
      <p className="text-slate-100"> Added Pipeline action for CD </p>
    </main>
  );
}
