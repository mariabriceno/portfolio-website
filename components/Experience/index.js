import ListItem from "./ListItem";

export default function Experience({ id, jobs, active }) {
  return (
    <>
      <h2 className="text-3xl mb-4 font-extrabold heading">Experience</h2>
      <ul>
        {jobs &&
          jobs.map((item, idx) => {
            return <ListItem key={idx} item={item} />;
          })}
      </ul>
    </>
  );
}
