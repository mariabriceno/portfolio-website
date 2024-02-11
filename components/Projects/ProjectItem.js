export default function ProjectItem({ item }) {
  return (
    <li className="py-4">
      <a
        href={item.link}
        target="_blank"
        className="flex justify-between content-center"
      >
        <p className="self-center text-white">{item.title}</p>

        <ul className="flex flex-wrap">
          {item.tech.map((i) => {
            return <li className="skill mr-2">{i}</li>;
          })}
        </ul>
      </a>
    </li>
  );
}
