import Image from 'next/image'
import { FunctionComponent } from 'react'

interface FeaturedProjectCardProps {
  position: number
}

/**
 * # FeaturedProjectCard
 *
 * card to handle the featured
 * project. Showing in home and include the effect
 * @returns JSX.Element
 */
const FeaturedProjectCard: FunctionComponent<FeaturedProjectCardProps> = ({
  position,
}): JSX.Element => {
  return (
    <div
      className={`flex flex-col transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
        position == 1
          ? 'row-start-2 col-span-1 row-span-5'
          : 'col-span-1 row-span-5'
      }`}
    >
      <div
        className="flex relative w-full h-[630px] overflow-hidden rounded-3xl"
        data-cursor-size="80"
        data-cursor-text="view"
        data-cursor-color="#568763"
      >
        <Image
          src={
            'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
          }
          alt="project featured image"
          fill
          className="object-cover"
        />
      </div>
      <span className="flex text-xl mt-10">Doen</span>
      <h4 className="flex text-3xl mt-6 w-10/12 leading-tight">
        Productivity todo list application
      </h4>
      <span className="flex text-lg font-light mt-4 text-slate-500">
        App, Development, Design, Branding
      </span>
    </div>
  )
}

export default FeaturedProjectCard
