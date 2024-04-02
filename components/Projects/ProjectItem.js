export default function ProjectItem({ item }) {
  return (
    <li className="py-4 list-item">
      <a
        href={item.link}
        target="_blank"
        className="flex md:flex-row flex-col justify-between md:content-center"
      >
        <p className="md:self-center md:mb-0 mb-4">{item.title}</p>

        <ul className="flex flex-wrap">
          {item.tech.map((i, idx) => {
            return (
              <li key={idx} className="skill mr-2 md:mb-0 mb-4">
                {i}
              </li>
            );
          })}
        </ul>
      </a>
    </li>
  );
}
