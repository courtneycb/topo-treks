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
      className={'object-cover rounded aspect-[5/3]'}
      width={500}
      height={500}
      priority={!!priority}
    />
  )
  return (
    <div className="flex">
      {slug ? (
        <div className="rounded-lg bg-white border border-zinc-300 max-w-sm p-4 hover:bg-gray-50">
          <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
            {image}
          </Link>
          <div className="pt-6">
            <h2 className="text-gray-900 text-xl font-medium mb-2 hover:underline">
              <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
                {title}
              </Link>
            </h2>
            {/* TODO: change to use excerpt from blog post */}
            <p className="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
            <div className="text-sm">
              <DateFormatter dateString={date} />
            </div>
            <div className="flex flex-row flex items-center justify-start gap-2 mt-6">
              {tags.map(tag => (
                <Link as={`/tags/${tag}`} href="/tags/[tag]" aria-label={tag} key={tag} className="leading-none bg-transparent capitalize text-neutral-900 text-sm rounded-full border border-zinc-300 z-10 py-[0.35rem] px-[0.6rem] hover:bg-green-600 hover:text-white hover:border-green-600">
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        image
      )}
    </div>
  )
}

export default Card
