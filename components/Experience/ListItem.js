import React, { useEffect, useState } from "react";
import { getHTMLFromMarkdown } from "../../utils/api";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";

export default function ListItem({ item }) {
  const [data, setData] = useState("");

  const components = { Head };

  useEffect(() => {
    async function getContent() {
      const content = await getHTMLFromMarkdown(item);
      setData(content);
    }

    if (!data) {
      getContent();
    }
  }, []);

  return (
    <li className="py-5">
      <header className="flex flex-row justify-between mb-4">
        <h3>{item.data.title}</h3>
        <p>
          {item.data.start} {item.data.end ? `- ${item.data.end}` : ""}
        </p>
      </header>
      {data && <MDXRemote {...data} components={components} />}
    </li>
  );
}
