import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32 justify-items-center">
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
          tags={post.tags}
        />
      ))}
    </div>
  )
}

export default MoreStories
