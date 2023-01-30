import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import { Tag } from '../interfaces/tag'

type Props = {
  title: string
  coverImage: string
  date: string
  slug: string
  tags: Tag[]
}

const HeroPost = ({
  title,
  coverImage,
  date,
  slug,
  tags,
}: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} tags={tags} date={date} priority={true} />
      </div>
    </section>
  )
}

export default HeroPost
