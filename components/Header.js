import Link from "next/link";
import { LinkedInIcon, GitHubIcon, EmailIcon } from "../utils/icons";

export default function Header({ name }) {
  return (
    <header className="flex flex-col justify-between h-full">
      <h1 className="text-4xl dark:text-white text-right pr-10">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </h1>

      <nav>
        <ul className="text-right mr-10">
          <li className="py-2">
            <a href="#about">About</a>
          </li>
          <li className="py-2">
            <a href="#experience">Experience</a>
          </li>
          <li className="py-2">
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>

      <ul className="flex flex-row justify-center pb-10">
        <li className="m-4">
          <a href="https://www.linkedin.com/in/mabriceno/">
            <LinkedInIcon />
          </a>
        </li>
        <li className="m-4">
          <a href="https://github.com/mariabriceno">
            <GitHubIcon />
          </a>
        </li>
        <li className="m-4">
          <a href="mailto:mlbriceno19@gmail.com">
            <EmailIcon />
          </a>
        </li>
      </ul>
    </header>
  );
}
