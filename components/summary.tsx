import { ArrowTrendingUpIcon, ClockIcon, MapIcon, MapPinIcon } from "@heroicons/react/24/outline"

type Props = {
  distance: string
  time: string
  elevation: string
  map: string
}

const Summary = ({ distance, time, elevation, map }: Props) => {
  return (
    <div className='flex overflow-auto mx-auto justify-center mb-4 not-prose'>
      <ul className='flex-none text-sm text-center inline-grid gap-x-6 px-4 sm:px-0 md:gap-x-12 grid-cols-4'>
        <li>
          <MapPinIcon className="w-12 h-12 text-green-700 inline-grid mb-1" title="Distance" />
          <p className="font-semibold">{distance}</p>
        </li>
        <li>
          <ClockIcon className="w-12 h-12 text-green-700 inline-grid mb-1" title="Time" />
          <p className="font-semibold">{time}</p>
        </li>
        <li>
          <ArrowTrendingUpIcon className="w-12 h-12 text-green-700 inline-grid mb-1" title="Elevation" />
          <p className="font-semibold">{elevation}</p>
        </li>
        <li>
          <MapIcon className="items-center w-12 h-12 text-green-700 inline-grid mb-1" title="NZTopo50 map sheet" />
          <p className="font-semibold">{map}</p>
        </li>
      </ul>
    </div>
  )
}

export default Summary

