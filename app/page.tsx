import Image from "next/image";
import Link from "next/link";
import { FaBeer } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-6xl">
        {" "}
        Hello Openshift <FaBeer className="inline" />
      </div>
      <p className="text-slate-100">
        {" "}
        Added Database api route{" "}
        <Link href="/api/test-db-connection/">Test Db Connection</Link>{" "}
      </p>
      <p>Added webhook in github to trigger Openshift build</p>
    </main>
  );
}
