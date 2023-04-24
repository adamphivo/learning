import type { Post } from "./features/api";
import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "./features/api";

interface Props {
  post: Post;
}
export default function PostComments({ post }: Props) {
  const { isError, isLoading, data } = useQuery(
    ["posts", post.id, "comments"],
    async () => fetchComments(post.id)
  );

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      <h4>Comments</h4>
      <div>
        {data.map((i) => (
          <div>
            <div>{i.email}</div>
            <div>{i.name}</div>
            <div>{i.id}</div>
            <div>{i.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
