import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Footer({ copyrightText }) {
  return (
    <footer className="flex flex-col container mt-24 mb-16 md:mb-0">
      <p className="dark:text-white text-md font-bold opacity-60 md:w-1/2">
        Built with <a href="https://nextjs.org/">Next.js</a>, styled with{" "}
        <a href="https://tailwindcss.com/">Tailwind CSS</a>, and deployed on{" "}
        <a href="https://www.netlify.com/">Netlify</a>.
      </p>
      {/* <ThemeSwitcher /> */}
    </footer>
  );
}
