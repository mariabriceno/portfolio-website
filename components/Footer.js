import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Footer({ copyrightText }) {
  return (
    <footer className="flex flex-col container my-16">
      <p className="dark:text-white text-sm font-bold opacity-60">
        Built with <a href="https://nextjs.org/">Next.js</a>, styled with{" "}
        <a href="https://tailwindcss.com/">Tailwind CSS</a>, and deployed on{" "}
        <a href="https://www.netlify.com/">Netlify</a>.
      </p>
      {/* <ThemeSwitcher /> */}
    </footer>
  );
}
