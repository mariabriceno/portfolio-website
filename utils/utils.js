import fs, { readdirSync } from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrism from "@mapbox/rehype-prism";
import remarkGfm from "remark-gfm";

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "posts");

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export const sortPostsByDate = (posts) => {
  return posts.sort((a, b) => {
    const aDate = new Date(a.data.date);
    const bDate = new Date(b.data.date);
    return bDate - aDate;
  });
};

export const getPosts = () => {
  let posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  posts = sortPostsByDate(posts);

  return posts;
};

export const getPortfolioItems = () => {
  const PORT_PATH = path.join(process.cwd(), "portfolio");
  const jobDirectories = fs
    .readdirSync(PORT_PATH)
    .filter((path) => !path.includes(".mdx"));

  const jobPaths = jobDirectories.map((directory) => {
    // ../../../portfolio/${job directory}
    return `${PORT_PATH}/${directory}`;
  });

  const jobData = jobPaths.map((directoryPath) => {
    const job = fs.readFileSync(path.join(directoryPath, "index.mdx"));
    const { content, data } = matter(job);

    let portfolioItems = [];

    const getPortfolioItems = fs
      .readdirSync(directoryPath)
      .filter((path) => /\.mdx?$/.test(path) && path !== "index.mdx");

    // checking if job directory has any projects to link to
    if (Array.isArray(getPortfolioItems) && getPortfolioItems.length) {
      portfolioItems = getPortfolioItems.map((fileName) => {
        const projectContent = fs.readFileSync(
          path.join(directoryPath, fileName)
        );

        const { content, data } = matter(projectContent);

        return {
          projectData: data,
          projectContent: content,
          projectFilePath: fileName,
        };
      });
    }

    return {
      head: data,
      description: content,
      portfolioItems,
    };
  });

  // jobData
  //
  // [{
  //   head: {
  //      title: 'Web Developer, Heap',
  //      start: 'June 2022'
  //   },
  //   description: 'example markup.....',
  //   portfolioItems: [{
  //         projectData: {title: ''},
  //         projectContent: '....example markup here...'
  //    }]
  // }]

  return jobData;
};

export const getPostBySlug = async (slug) => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    },
    scope: data,
  });

  return { mdxSource, data, postFilePath };
};

export const getNextPostBySlug = (slug) => {
  const posts = getPosts();
  const currentFileName = `${slug}.mdx`;
  const currentPost = posts.find((post) => post.filePath === currentFileName);
  const currentPostIndex = posts.indexOf(currentPost);

  const post = posts[currentPostIndex - 1];
  // no prev post found
  if (!post) return null;

  const nextPostSlug = post?.filePath.replace(/\.mdx?$/, "");

  return {
    title: post.data.title,
    slug: nextPostSlug,
  };
};

export const getPreviousPostBySlug = (slug) => {
  const posts = getPosts();
  const currentFileName = `${slug}.mdx`;
  const currentPost = posts.find((post) => post.filePath === currentFileName);
  const currentPostIndex = posts.indexOf(currentPost);

  const post = posts[currentPostIndex + 1];
  // no prev post found
  if (!post) return null;

  const previousPostSlug = post?.filePath.replace(/\.mdx?$/, "");

  return {
    title: post.data.title,
    slug: previousPostSlug,
  };
};
