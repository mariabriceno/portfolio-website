import classNames from "classnames";
import { Divider } from "../utils/icons";

export default function Section({
  id,
  className,
  sectionRef,
  active,
  children,
}) {
  return (
    <>
      <section
        ref={sectionRef}
        className={classNames(className, active ? "active" : "")}
        id={id}
      >
        {children}
      </section>
      <Divider />
    </>
  );
}
