import React from "react";
import { css } from "@emotion/core";

export default function clickme() {
  const [count, setCount] = React.useState(0);
  return (
    <button
      css={css`
        background: rebeccapurple;
        font-size: 2rem;
        color: white;
        width: 150px;
        padding: 5px 10px;
        border-radius: 5px;
        border: none;
      `}
      onClick={() => setCount(count + 1)}
    >
      {count + "    🙋‍♂️   "}
    </button>
  );
}
