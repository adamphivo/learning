import { PostSchema, Post } from "./schemas/postSchema";

export async function getRessource(): Promise<Post> {
  try {
    const URL = "https://jsonplaceholder.typicode.com/posts/1";

    const response = await fetch(URL);

    if (!response.ok) {
      throw Error("Request failed.");
    }

    const data = await response.json();
    const validatedData = PostSchema.parse(data);

    return validatedData;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
