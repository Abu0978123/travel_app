import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSize = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div className={`h-full rounded-3xl w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image
              src='/folded-map.svg'
              alt="map"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {
              PEOPLE_URL.map((url) => (
                <Image
                  src={url}
                  key={url}
                  alt="person"
                  width={52}
                  height={52}
                  className="inline-block h-10 w-10 rounded-full"
                />
              ))
            }
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className='px-6 sm:px-20 container relative flex flex-col py-5 lg:mb-10 lg:py-5 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overlfow-x-auto lg:h-[400px] xl:h-[500px]'>
        <CampSize
          backgroundImage='bg-bg-img-1'
          title='Putuk Truno Camp'
          subtitle='Prigen, Pasuruan'
          peopleJoined='50+ Joined'
        />
        <CampSize
          backgroundImage='bg-bg-img-2'
          title='Mountain View Camp'
          subtitle='Somewhere in the Wilderness'
          peopleJoined='50+ Joined'
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-40 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-2-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regualr-32 2xl:regular-64 capitalize text-white"><strong>Feeling Lost</strong> And Not Knowing The Way?</h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are her for those of you who want to start an adventure.
          </p>
          <Image
            src='/quote.svg'
            alt='camp-2'
            width={186}
            height={219}
            className='camp-quote'
          />
        </div>
      </div>
    </section>
  )
}

export default Camp