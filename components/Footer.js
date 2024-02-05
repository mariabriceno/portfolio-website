import { ThemeSwitcher } from './ThemeSwitcher';

export default function Footer({ copyrightText }) {
  return (
    <footer className="flex flex-col text-center row-start-12 row-span-1 col-start-5 col-end-13">
      <p className="dark:text-white uppercase font-bold opacity-60">
        {copyrightText}
      </p>
      {/* <ThemeSwitcher /> */}
    </footer>
  );
}
