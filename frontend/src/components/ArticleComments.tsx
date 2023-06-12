import { CommentList } from "./CommentList";
import { ArticleCommentsWrapper } from "./ArticleCommentsWrapper";
import { CommentSubmit } from "./CommentSubmit";
import { SubpageHeading } from "./SubpageHeading";
import { Authorized } from "./Authorized";
import { getComments } from "../api/requests";
import { useQuery } from "@tanstack/react-query";

const SAMPLE_COMMENTS = [
  {
    id: "1",
    content:
      "Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1",
    author: "TestUser1",
    createdAt: "12.2.2022",
  },
  { id: "2", content: "Test2", author: "TestUser2", createdAt: "12.3.2022" },
  { id: "3", content: "Test3", author: "TestUser3", createdAt: "12.4.2022" },
  { id: "4", content: "Test4", author: "TestUser4", createdAt: "12.5.2022" },
];

interface ArticleCommentsProps {
  articleId: string;
}

export const ArticleComments = ({ articleId }: ArticleCommentsProps) => {

  const { data, isLoading } = useQuery({
    queryKey: ["article", articleId],
    queryFn: () => getComments(articleId),
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: false,
  });

  return (
    <ArticleCommentsWrapper>
      <SubpageHeading heading="Comments" />
      <CommentList comments={data?.item} isLoading={isLoading} />
      <Authorized role="JOURNALIST">
        <CommentSubmit articleId={articleId} buttonLabel="Submit comment" />
      </Authorized>
    </ArticleCommentsWrapper>
  );
};
