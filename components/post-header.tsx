import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'
import Summary from './summary'

type Props = {
  title: string
  coverImage: string
  date: string
  tags: [string]
  distance: string
  time: string
  elevation: string
  difficulty: string
}

const PostHeader = ({ title, coverImage, date, tags, distance, time, elevation, difficulty }: Props) => {
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
        difficulty={difficulty}
      />
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} tags={tags} date={date} />
      </div>
    </>
  )
}

export default PostHeader
