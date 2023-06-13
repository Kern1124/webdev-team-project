import { useParams } from "react-router";

export const ArticleSearchPage = () => {
  const { content } = useParams();

  return <>{content}</>;
};
