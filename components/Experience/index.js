import ListItem from "./ListItem";

export default function Experience({ jobs }) {
  return (
    <section id="experience">
      <h2 className="text-3xl">Experience</h2>
      <ul>
        {jobs &&
          jobs.map((item, idx) => {
            return <ListItem key={idx} item={item} />;
          })}
      </ul>
    </section>
  );
}
