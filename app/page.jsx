import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Status from "@/components/Status"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    <section className="min-h-[calc(100dvh-72px)] xl:min-h-[calc(100dvh-96px)] overflow-hidden">
      <div className="container mx-auto h-full flex flex-col justify-between">
        <div className="flex-1 min-h-0 flex flex-col xl:flex-row items-center justify-between xl:pt-6">
          {/* Text  */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="text-[30px] sm:text-[42px] xl:text-[60px] leading-[1.1] font-semibold">
              Hello I'm <br />
              <span className="text-accent">Sujith <span className="xl:text-[60px] md:text-[48px] text-[30px]">Poonthottathil</span></span>
            </h1>
            <p className="max-w-[500px] mb-5 xl:mb-8 text-white/80">
              Excel at crafting elegant digital experience and proficient in various programming languages and technologies.
            </p>
            {/* Button for social */}
            <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-6">
              <Button
                variant='outline'
                size='lg'
                className='uppercase flex items-center gap-2 cursor-pointer'
              >
                <a href="/assets/Sujith Full Stack ( MERN ) Developer Resume.pdf" download>
                  <span>Download CV</span>
                </a>
                <FiDownload />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles='flex gap-6' iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent
                text-base hover:bg-accent hover:text-primary hover:transition-all duration-500' />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-4 xl:mb-0">
            <Photo />
          </div>
        </div>
        <div className="hidden md:block">
          <Status />
        </div>
      </div>
    </section>
  )
}

export default Home