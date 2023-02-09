import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'
import Summary from './summary'
import { Tag } from '../interfaces/tag'

type Props = {
  title: string
  coverImage: string
  date: string
  tags: Tag[]
  distance: string
  time: string
  elevation: string
  map: string
}

const PostHeader = ({ title, coverImage, date, tags, distance, time, elevation, map }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 text-center text-sm">
        <DateFormatter dateString={date} />
      </div>
      <Summary
        distance={distance}
        time={time}
        elevation={elevation}
        map={map}
      />
      <div className="mb-8 sm:mx-0">
        <CoverImage title={title} src={coverImage} tags={tags} date={date} priority={true} />
      </div>
    </>
  )
}

export default PostHeader
