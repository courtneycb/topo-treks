import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'
import Layout from '../../components/layout'
import Head from 'next/head'
import Post from '../../interfaces/post'
import { Tag } from '../../interfaces/tag'
import { getAllTags, getPostsByTag } from '../../lib/api'

type Props = {
  allPosts: Post[];
  tag: Tag;
}

export default function Index({ allPosts, tag }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>{tag} | Topo Treks</title>
        </Head>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              slug={heroPost.slug}
              tags={heroPost.tags}
              date={heroPost.date}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

type Params = {
  params: {
    tag: Tag
  }
}

export const getStaticPaths = async () => {
  const tags = getAllTags();

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag: tag,
        },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const tag = params.tag;
  const allPosts = getPostsByTag(tag, [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tags',
    'distance',
    'time',
    'elevation',
    'map',
  ])

  return {
    props: { allPosts, tag },
  }
}
