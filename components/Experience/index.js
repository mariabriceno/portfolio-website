import ListItem from "./ListItem";

export default function Experience({ jobs }) {
  return (
    <>
      <h2 className="text-3xl">Experience</h2>
      <ul className="divide-y divide-slate-100/25">
        {jobs &&
          jobs.map((item) => {
            return <ListItem item={item} />;
          })}
      </ul>
    </>
  );
}
