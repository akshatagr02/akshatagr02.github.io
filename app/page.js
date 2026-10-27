import Navbar from "@/Components/Navbar";
import TechIcons from "@/Components/TechIcons";
import Typewriter from "@/Components/Typewriter";
import Image from "next/image";
import { lazy } from "react";
import { FaJs, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
export default function Home() {
  const phrases = [" Android Development", "Web Development", "Agentic AI Systems" , "And Many More"];
    const iconStyle = "text-[#161513] text-[35px]";
  return (
    <>
      <Navbar />

      <main className="bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] min-h-full bg-[size:14px_24px]">




          <section className="pt-8  h-[85vh] flex flex-col items-center  items-center justify-center">


       

            <img src="/img/photo.png" className="w-[16rem] rounded-full " width={50} height={50} />

            <div>

            <div className="text-xl text-amber-500 font-bold text-amber-50 mt-6 gap-3 grid grid-cols-2 ">
              <h1 className="inline text-3xl font-poppins text-end text-white">I worked Around With</h1>
              <span className="inline-block text-left min-w-[20ch] text-3xl font-poppins"><Typewriter strings={phrases} /></span>
            </div>
            <div>
              <p className="text-center w-[55rem] mt-3 text-gray-400">
                I'm A Second-Year B.Tech Student Passionate About Building Software, Exploring AI, And Turning Ideas Into Reality. I Have Experience In Android Development, Full-Stack Development, And Agentic AI. Also Actively Participating In Hackathons, Tech Events, And Entrepreneurship Events.
              </p>
            </div>
          <div className="buttons-container gap-3 flex justify-center mt-5">
        <button className="px-6 py-[10px] rounded-full border border-gray-300 bg-[#f9fafb] text-black font-poppins shadow-sm transition-colors duration-200 hover:bg-gray-200 cursor-pointer ">
  Download CV
</button>

<button className="px-6 py-[10px] rounded-full border border-[white] bg-[#0d111b] text-white shadow-sm transition-colors duration-200 hover:bg-[#171d2a] cursor-pointer">
  Read Articles
</button>
          </div>


            </div>
       

          </section>


          
  <section className="w-full bg-[#c5c5c5] py-12 flex flex-col mb-56 items-center">
      <h2 className="mb-7 text-[20px ] font-bold tracking-[2px] text-[#171615]">
        EXPERIENCE WITH
      </h2>

      <TechIcons/>
    </section>

      </main>

    </>
  );
}
