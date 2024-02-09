export default function Project({ project }) {
  const title = project.projectData.title;

  return (
    <li>
      <button>{title}</button>
    </li>
  );
}
