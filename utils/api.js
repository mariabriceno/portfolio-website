import { serialize } from "next-mdx-remote/serialize";
import rehypePrism from "@mapbox/rehype-prism";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";

export const getHTMLFromMarkdown = async (item) => {
  const { content, data } = matter(item);
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
      development: true,
    },
    scope: data,
  });

  return mdxSource;
};
