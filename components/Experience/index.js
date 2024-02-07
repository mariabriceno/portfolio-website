import ListItem from "./ListItem";

export default function Experience({ jobs }) {
  return (
    <section>
      <h2 className="text-3xl">Experience</h2>
      <ul className="divide-y divide-slate-100/25">
        {jobs &&
          jobs.map((item, idx) => {
            return <ListItem key={idx} item={item} />;
          })}
      </ul>
    </section>
  );
}
