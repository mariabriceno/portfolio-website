import Link from "next/link";
import React, { useState } from "react";
import { LinkedInIcon, GitHubIcon, EmailIcon } from "../utils/icons";

export default function Header({ name }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="flex flex-col justify-between h-full">
      <h1 className="text-4xl dark:text-white text-right pr-10 hidden md:block">
        <Link href="/">
          <a className="text-white hover:text-white">{name}</a>
        </Link>
      </h1>

      <nav className="h-full">
        <div className="md:hidden flex flex-row justify-between container py-4">
          <h1 className="text-lg">
            <Link href="/">
              <a className="text-white">{name}</a>
            </Link>
          </h1>
          <button onClick={handleClick}>{open ? "close" : "open"}</button>
        </div>

        <div
          className="aria-hidden:hidden h-full md:!flex md:flex-col md:justify-between"
          aria-hidden={!open}
        >
          <ul className="text-right mr-10 md:mt-24">
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

          <ul className="flex flex-row justify-center pb-10 md:pb-0">
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
        </div>
      </nav>
    </header>
  );
}
