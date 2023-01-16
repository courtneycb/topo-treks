import { ArrowTrendingUpIcon, ChartBarIcon, ClockIcon, MapPinIcon } from "@heroicons/react/24/outline"

type Props = {
  distance: string
  time: string
  elevation: string
  difficulty: string
}

const Summary = ({ distance, time, elevation, difficulty }: Props) => {
  return (
    <div className='flex overflow-auto mx-auto justify-center mb-4'>
      <ul className='flex-none text-sm text-center inline-grid gap-x-6 px-4 sm:px-0 md:gap-x-12 grid-cols-4'>
        <li>
          <MapPinIcon className="text-green-700" />
          <p className="font-semibold">{distance}</p>
        </li>
        <li>
          <ClockIcon className="text-green-700" />
          <p className="font-semibold">{time}</p>
        </li>
        <li>
          <ArrowTrendingUpIcon className="text-green-700" />
          <p className="font-semibold">{elevation}</p>
        </li>
        <li>
          <ChartBarIcon className="text-green-700" />
          <p className="font-semibold">{difficulty}</p>
        </li>
      </ul>
    </div>
  )
}

export default Summary

