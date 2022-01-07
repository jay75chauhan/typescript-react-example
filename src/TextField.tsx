import React, { useRef, useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => void;
  person?: Person;
}

interface TextNode {
  user: string;
}

export const TextField: React.FC<Props> = ({ text }) => {
  const [texte, setText] = useState<TextNode>({ user: "bob" });

  const ref = useRef<HTMLInputElement>(null);

  setText({ user: "bob" });

  console.log("==>", text);
  return (
    <div>
      <h1 style={{ color: "black" }}>{text}</h1>
      <input ref={ref} />
    </div>
  );
};
