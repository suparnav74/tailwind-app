import Image from "next/image";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import MidContent from "./components/MidContent";
import RightSideBar from "./components/RightSideBar";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar/>
      <div className="flex">
        <Sidebar/>
        <main className="flex-1 p-8 space-y-8">
          <MidContent/>
        </main>
        <RightSideBar/>
      </div>
    </div>
  );
}
