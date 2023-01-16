import cn from 'classnames'
import DateFormatter from './date-formatter'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  tags: [string]
  date: string
  slug?: string
}

const CoverImage = ({ title, src, tags, date, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm object-cover h-full rounded', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
      width={1200}
      height={600}
    />
  )
  return (
    <div className="relative sm:mx-0 h-[600px]">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
          <div className="absolute inset-x-0 bottom-2 grid grid-rows-3 gap-4 text-white z-10 justify-items-center leading-none">
            <div className="flex text-5xl font-bold">
              {title}
            </div>
            <div className="flex flex-row flex items-center justify-center">
              {tags.map(tag => (
                <div className="bg-green-700 bottom-10 text-white text-sm rounded-full z-10 py-1 px-2 mx-1">
                  {tag}
                </div>
              ))}
            </div>
            <div className="text-sm">
              <DateFormatter dateString={date} />
            </div>
          </div>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
