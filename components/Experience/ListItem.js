import React, { useEffect, useState } from "react";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import useMDXSource from "../../utils/hooks/useMDXSource";
import Project from "./Project";

export default function ListItem({ item }) {
  const { html } = useMDXSource(item.description);
  const components = { Head };

  const portItems = item.portfolioItems;

  return (
    <li className="py-5">
      <header className="flex flex-row justify-between mb-4">
        <h3 className="text-xl">{item.head.title}</h3>
        <p>
          {item.head.start} {item.head.end ? `- ${item.head.end}` : ""}
        </p>
      </header>
      <main className="text-sm">
        {html && <MDXRemote {...html} components={components} />}
      </main>

      {portItems.length !== 0 && (
        <footer className="mt-4">
          <ul>
            {portItems.map((project) => {
              return <Project {...project} />;
            })}
          </ul>
        </footer>
      )}
    </li>
  );
}
