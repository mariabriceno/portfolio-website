import React, { useState, useEffect } from "react";
import { getHTMLFromMarkdown } from "../api";

export default function useMDXSource(source) {
  const [data, setData] = useState("");

  useEffect(() => {
    async function getContent() {
      const content = await getHTMLFromMarkdown(source);
      setData(content);
    }

    if (!data) {
      getContent();
    }
  }, []);

  return {
    html: data,
  };
}
