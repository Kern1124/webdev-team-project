import { CommentList } from "./CommentList";
import { ArticleCommentsWrapper } from "./ArticleCommentsWrapper";
import { CommentSubmit } from "./CommentSubmit";
import { SubpageHeading } from "./SubpageHeading";
import { Authorized } from "./Authorized";
import { getComments } from "../api/requests";
import { useQuery } from "@tanstack/react-query";

interface ArticleCommentsProps {
  articleId: string;
}

export const ArticleComments = ({ articleId }: ArticleCommentsProps) => {

  const { data, isLoading } = useQuery({
    queryKey: ["comment", articleId],
    queryFn: () => getComments(articleId),
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: false,
  });
  console.log(data)

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
