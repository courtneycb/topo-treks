import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
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
  return (
    <>
      <Layout>
        <Head>
          <title>{tag} | Topo Treks</title>
        </Head>
        <Container>
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
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
