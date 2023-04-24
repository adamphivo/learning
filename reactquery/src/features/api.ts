import axios from "axios";
import { API_URL } from "../lib";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export async function fetchPosts(page: number): Promise<Post[]> {
  const { data } = await axios.get(`${API_URL}posts?_limit=10&_page=${page}`);
  return data;
}

export async function fetchComments(postId: number): Promise<Comment[]> {
  const { data } = await axios.get(`${API_URL}posts/${postId}/comments`);
  return data;
}
