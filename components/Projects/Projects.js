import ProjectItem from "./ProjectItem";

export default function Project({ projects }) {
  return (
    <>
      <h2 className="text-3xl mb-4 font-extrabold heading">Projects</h2>
      <ul className="divide-y divide-slate-500">
        {projects &&
          projects.map((item, idx) => {
            return <ProjectItem item={item} key={idx} />;
          })}
      </ul>
    </>
  );
}
