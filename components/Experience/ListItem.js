import React, { useEffect, useState } from "react";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import useMDXSource from "../../utils/hooks/useMDXSource";

export default function ListItem({ item }) {
  const { html } = useMDXSource(item.description);
  const components = { Head };

  return (
    <li className="py-10 flex md:flex-row flex-col">
      <header className="w-60 shrink-0">
        <p className="text-md">
          {item.head.start} -<br />
          {item.head.end ? `${item.head.end}` : "Present"}
        </p>
      </header>
      <main className="text-sm border-b pb-10 border-slate-500">
        <h3 className="text-2xl mb-1 font-bold">{item.head.title}</h3>
        <a
          className="text-base block mb-4 uppercase tracking-wider"
          href={item.head.link}
          target="_blank"
        >
          {item.head.company}
        </a>
        {html && <MDXRemote {...html} components={components} />}
      </main>
    </li>
  );
}
