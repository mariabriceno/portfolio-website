export default function ProjectItem({ item }) {
  return (
    <li className="flex justify-between py-4">
      <p>{item.title}</p>

      <ul className="flex flex-wrap">
        {item.tech.map((i) => {
          return <li className="skill">{i}</li>;
        })}
      </ul>

      <a href={item.link}>Check it out</a>
    </li>
  );
}
