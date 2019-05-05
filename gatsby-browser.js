import React from "react";
import { MDXProvider } from "@mdx-js/react";
import "./src/utils/nightOwl.css";

const components = {
  pre: props => <div {...props} />,
  code: props => <pre style={{ color: "tomato" }} {...props} />
};
export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
