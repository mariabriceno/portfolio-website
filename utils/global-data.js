export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : "Maria Laura Briceno";
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : "Next.js Blog Theme";
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : "All rights reserved";

  const navigation = [
    {
      text: "About",
      link: "#about",
    },
    {
      text: "Experience",
      link: "#experience",
    },
    {
      text: "Projects",
      link: "#projects",
    },
  ];

  return {
    name,
    blogTitle,
    footerText,
    navigation,
  };
};
