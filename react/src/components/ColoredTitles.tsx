import { useContext } from "react";
import { TitleContext } from "../contexts/TitleContext";

export default function ColoredTitles() {
  return (
    <>
      <Article title="test1" id={1}></Article>
      <Article title="test2" id={1}></Article>
      <Article title="test3" id={1}></Article>
      <Article title="test4" id={1}></Article>
    </>
  );
}

function Article({ title, id }: { title: string; id: number }) {
  return (
    <div>
      <p>{id}</p>
      <ArticleTitle title={title}></ArticleTitle>
    </div>
  );
}

function ArticleTitle({ title }: { title: string }) {
  const color = useContext(TitleContext);
  return <div style={{ color: color }}>{title}</div>;
}
