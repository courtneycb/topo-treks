import Avatar from './avatar'
import DateFormatter from './date-formatter'
import Card from './card'
import Link from 'next/link'
import type Author from '../interfaces/author'
import { Tag } from '../interfaces/tag'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  tags: Tag[]
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <Card slug={slug} title={title} src={coverImage} tags={tags} date={date} />
      </div>
    </div>
  )
}

export default PostPreview
