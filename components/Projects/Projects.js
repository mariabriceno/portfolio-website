import ProjectItem from "./ProjectItem";

export default function Project({ projects }) {
  return (
    <section id="projects">
      <h2 className="text-3xl mb-6">Projects</h2>
      <ul className="divide-y divide-slate-500">
        {projects &&
          projects.map((item, idx) => {
            return <ProjectItem item={item} key={idx} />;
          })}
      </ul>
    </section>
  );
}
