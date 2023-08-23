import { projects } from "../../data/db";
import ProjectCard from "../ui/ProjectCard";

function Project() {
  return (
    <section className="mt-16 w-full px-6 py-6 sm:px-16">
      <div className="mx-auto flex max-w-[900px] flex-col items-center justify-center gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
export default Project;
