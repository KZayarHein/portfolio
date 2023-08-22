/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { HiOutlineCodeBracket, HiOutlinePlayCircle } from "react-icons/hi2";

function ProjectCard({ project }) {
  const { title, description, tools } = project;
  return (
    <>
      <div className="flex flex-col  gap-10 rounded-md border border-slate-500   px-3 py-5 sm:px-10">
        <div className="relative flex flex-col items-center justify-center gap-5  md:flex-row">
          <div className="w-full ">
            <img
              src="/the-wild-oasis.png"
              className="h-[250px] rounded-md object-cover"
              alt="the wild oasis"
            />
          </div>

          <div className=" flex flex-col gap-3">
            <h3 className=" text-3xl font-bold uppercase">{title}</h3>
            <p className=" text-sm text-slate-400">{description}</p>
            <div className=" flex items-center gap-3 text-base">
              {tools.map((tool) => (
                <p key={tool} className="text-slate-400">
                  #
                  <span
                    className={`${
                      tool === "react"
                        ? "text-blue-500"
                        : tool === "supabase"
                        ? "text-teal-500"
                        : tool === "react query"
                        ? "text-red-500"
                        : ""
                    }`}
                  >
                    {tool}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-fit items-center  rounded-full border border-slate-500 text-xl">
          <a
            href="https://github.com/Kyaw-Zayar-Hein/the-wild-oasis"
            target="_blank"
            className=" flex  h-fit items-center justify-center rounded-l-full   border-r border-black px-4 py-2 transition-all hover:bg-slate-500"
          >
            <HiOutlineCodeBracket />
          </a>
          <a
            href="https://the-wild-oasis-rose.vercel.app/"
            target="_blank"
            className="flex  items-center justify-center rounded-r-full  border-l border-black px-4 py-2 transition-all hover:bg-slate-500"
          >
            <HiOutlinePlayCircle />
          </a>
        </div>
      </div>
    </>
  );
}
export default ProjectCard;
