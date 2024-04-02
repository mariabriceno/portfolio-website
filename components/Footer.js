import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Footer({ copyrightText }) {
  return (
    <footer className="flex flex-col container mt-24 mb-16 md:mb-0">
      <h6 className="opacity-60 dark:text-white font-bold pb-2">
        About this site
      </h6>
      <p className="dark:text-white text-sm font-bold opacity-60 md:w-1/2">
        Designed with{" "}
        <a
          className="link"
          target="_blank"
          href="https://www.figma.com/file/4fjFuoQ6gFHlq1OJzmgkMc/Portfolio-site?type=design&node-id=5%3A1130&mode=design&t=E0Tn01jeuNqGMjmC-1"
        >
          Figma
        </a>
        , built with{" "}
        <a className="link" target="_blank" href="https://nextjs.org/">
          Next.js
        </a>
        , styled with{" "}
        <a className="link" target="_blank" href="https://tailwindcss.com/">
          Tailwind CSS
        </a>
        , and deployed on{" "}
        <a className="link" target="_blank" href="https://www.netlify.com/">
          Netlify
        </a>
        .
      </p>
      {/* <ThemeSwitcher /> */}
    </footer>
  );
}
