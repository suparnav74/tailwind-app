import Image from "next/image";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import MidContent from "./components/MidContent";
import RightSideBar from "./components/RightSideBar";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex flex-col lg:flex-row pt-20">
        <div className="w-full lg:w-1/5 p-4">
          <Sidebar />
        </div>
        <main className="w-full lg:w-3/5 p-4 lg:p-10 space-y-8">
          <MidContent />
        </main>
        <div className="w-full lg:w-1/5 p-4">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}
