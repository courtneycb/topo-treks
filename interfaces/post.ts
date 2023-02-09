import type Author from "./author";
import { Tag } from "./tag";

type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  tags: Tag[];
  distance: string;
  time: string;
  elevation: string;
  map: string;
};

export default PostType;
