import DateFormatter from './date-formatter'
import Link from 'next/link'
import Image from 'next/image'
import { Tag } from '../interfaces/tag'

type Props = {
  title: string
  src: string
  tags: Tag[]
  date: string
  slug?: string
  priority?: boolean
}

const Card = ({ title, src, tags, date, slug, priority }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={'object-cover rounded-t-lg'}
      width={500}
      height={500}
      priority={!!priority}
    />
  )
  return (
    <div className="flex">
      {slug ? (
        <div className="rounded-lg bg-white border-zinc-300 max-w-sm">
          <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
            {image}
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {title}
              </h5>
              {/* TODO: change to use excerpt from blog post */}
              <p className="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up the bulk of the card's
                content.
              </p>
              <div className="flex flex-row flex items-center justify-start gap-2">
                {tags.map(tag => (
                  <button key={tag} className="bg-transparent text-neutral-900 text-sm rounded-full border-zinc-300 z-10 py-1.5 px-2.5">
                    {tag}
                  </button>
                ))}
              </div>
              <div className="text-sm">
                <DateFormatter dateString={date} />
              </div>
            </div>
          </Link>
        </div>
      ) : (
        image
      )}
    </div>
  )
}

export default Card
