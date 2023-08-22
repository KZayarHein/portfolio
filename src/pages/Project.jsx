import { projects } from "../../data/db";
import ProjectCard from "../ui/ProjectCard";

function Project() {
  return (
    <section className="mt-16 w-full px-6 sm:px-16">
      <div className="mx-auto max-w-[900px]">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
export default Project;
