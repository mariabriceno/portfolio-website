import Link from "next/link";
import React, { useState } from "react";
import { LinkedInIcon, GitHubIcon, EmailIcon } from "../utils/icons";
import classNames from "classnames";

export default function Header({ name, navItems, setSection, active }) {
  const [open, setOpen] = useState(false);

  // handle mobile nav
  const toggleMobileNav = () => {
    setOpen((prev) => !prev);
  };

  console.log(active);

  return (
    <header className="flex flex-col justify-between h-full">
      <h1 className="text-6xl font-black dark:text-white text-right pr-10 hidden md:block">
        <Link href="/">
          <a className="text-white hover:text-white">
            Maria
            <br />
            Laura
            <br />
            Briceno
          </a>
        </Link>
      </h1>

      <nav className="h-full">
        <div className="md:hidden flex flex-row justify-between container py-4">
          <h1 className="text-lg">
            <Link href="/">
              <a className="text-white">{name}</a>
            </Link>
          </h1>
          <button onClick={toggleMobileNav}>{open ? "close" : "open"}</button>
        </div>

        <div
          className="aria-hidden:hidden h-full md:!flex md:flex-col md:justify-between"
          aria-hidden={!open}
        >
          <ul className="text-right mr-10 md:mt-16">
            {navItems &&
              navItems.map((item, idx) => {
                return (
                  <li
                    className={classNames(
                      item.text === active ? "active" : "",
                      "nav-items"
                    )}
                    key={idx}
                  >
                    <a href={item.link} onClick={() => setSection(item.text)}>
                      {item.text}
                    </a>
                  </li>
                );
              })}
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
