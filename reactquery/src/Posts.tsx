import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "./features/api";
import { useState } from "react";
import type { Post } from "./features/api";
import PostComments from "./PostComments";

export default function Posts(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);
  const { data, status, isLoading, isError, isFetching, isSuccess, error } =
    useQuery(["posts", currentPage], async () => fetchPosts(currentPage), {
      staleTime: 1000 * 2,
    });

  if (isFetching) return <div>Fetching !</div>;
  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      <h1>Posts</h1>
      {currentPage > 1 && (
        <button
          onClick={() => {
            setCurrentPage(currentPage - 1);
            setSelectedPost(undefined);
          }}
        >
          Previous
        </button>
      )}
      <button
        onClick={() => {
          setCurrentPage(currentPage + 1);
          setSelectedPost(undefined);
        }}
      >
        Next
      </button>
      <p>Fetch status : {status}</p>
      <div>
        {data.map((p) => {
          return (
            <div key={p.id} onClick={() => setSelectedPost(p)}>
              <div>ID : {p.id}</div>
              <div>USERID : {p.userId}</div>
              <div>TITLE : {p.title}</div>
              <div>BODY : {p.body}</div>
            </div>
          );
        })}
      </div>
      <div>{selectedPost && <PostComments post={selectedPost} />}</div>
    </>
  );
}
