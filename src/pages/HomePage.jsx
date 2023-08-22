/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import animation from "../assets/programming.json";
import {
  AiOutlineDownload,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
function HomePage() {
  return (
    <section className="  mt-16 w-full px-6 sm:px-16">
      <div className="mx-auto flex max-w-[900px] flex-col items-center justify-center gap-5  md:flex-row">
        <div className=" flex-1">
          <h1 className=" text-[72px] font-bold leading-[1.05] tracking-[-5px] ">
            Hi,
          </h1>
          <h1 className=" text-[72px] font-bold leading-[1.05] tracking-[-5px] ">
            I'm Zay,
          </h1>
          <h1 className=" text-[72px] font-bold leading-[1.05] tracking-[-5px] text-blue-500">
            front-end developer
          </h1>
          <span className="mt-2 block text-sm text-slate-400">
            Focus on building websites with beautiful UI desigs.
          </span>

          <a
            href="/Resume.pdf"
            className="mt-6 inline-block rounded bg-blue-500 px-2 py-1 text-sm font-semibold text-white hover:bg-blue-400  md:px-4 md:py-2 md:text-base"
            download
          >
            Resume
            <AiOutlineDownload className="ml-3 inline align-middle" />
          </a>

          <div className=" mt-3 flex items-center gap-3">
            <a href="https://github.com/Kyaw-Zayar-Hein" target="_blank">
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kyaw-zayar-hein"
              target="_blank"
            >
              <AiOutlineLinkedin />
            </a>
            <a href="https://www.instagram.com/kzyh_10" target="_blank">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
        <div className=" w-full flex-1">
          <Lottie
            animationData={animation}
            className="h-[400px]  object-contain"
          />
        </div>
      </div>
    </section>
  );
}
export default HomePage;
