import classNames from "classnames";
import { useEffect } from "react";
// import styles from "./Layout.module.css";

// export function GradientBackground({ variant, className }) {
//   const classes = classNames(
//     {
//       [styles.colorBackground]: variant === "large",
//       [styles.colorBackgroundBottom]: variant === "small",
//     },
//     className
//   );

//   return <div className={classes} />;
// }

export default function Layout({ children }) {
  // const setAppTheme = () => {
  //   const darkMode = localStorage.getItem("theme") === "dark";
  //   const lightMode = localStorage.getItem("theme") === "light";

  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else if (lightMode) {
  //     document.documentElement.classList.remove("dark");
  //   }
  //   return;
  // };

  // const handleSystemThemeChange = () => {
  //   var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  //   darkQuery.onchange = (e) => {
  //     if (e.matches) {
  //       document.documentElement.classList.add("dark");
  //       localStorage.setItem("theme", "dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //       localStorage.setItem("theme", "light");
  //     }
  //   };
  // };

  // useEffect(() => {
  //   setAppTheme();
  // }, []);

  // useEffect(() => {
  //   handleSystemThemeChange();
  // }, []);

  return (
    <div className="mx-auto grid grid-cols-12 h-screen p-24">{children}</div>
  );
}
