'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Photo = () => {
    return (
        // ✅ (1) Add flex centering wrapper
        <div className='w-full h-full relative flex items-center justify-center'>

            <motion.div initial={{ opacity: 0 }} animate={{
                opacity: 1,
                transition: {
                    delay: 2, duration: 0.4, ease: "easeIn"
                }
            }} className="relative flex justify-center items-center">

                {/* ✅ (2, 3, 4, 5) Image size matched and overlay reduced */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2, duration: 0.4, ease: "easeInOut"
                        }
                    }}
                    // className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full absolute z-10'
                    className='w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] xl:w-[430px] xl:h-[430px] rounded-full absolute z-10'
                >
                    <Image
                        src={'/assets/f2.jpg'}
                        priority
                        quality={100}
                        fill
                        alt=''
                        className='object-contain rounded-full'
                    />
                    <div className="absolute inset-0 bg-black/10 rounded-full"></div>
                </motion.div>

                {/* ✅ (2, 3) SVG sizes matched exactly */}
                <motion.svg
                    className='w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] xl:w-[450px] xl:h-[450px]'
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <motion.circle
                        cx='253' cy='253'
                        r='250'
                        stroke='#00ff99'
                        strokeWidth='4'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"]
                            // ✅ Removed incorrect rotate
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: 'reverse'
                        }}
                    />
                </motion.svg>
            </motion.div>

        </div>
    )
}

export default Photo
