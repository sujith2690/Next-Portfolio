'use client'

import { motion } from "framer-motion"

// Variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}

// Helper to reverse the animation index
const reverseIndex = (index) => {
    const totalSteps = 6
    return totalSteps - index - 1
}

const Stairs = () => {
    return (
        <>
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reverseIndex(i) * 0.1,
                    }}
                    className="h-full w-full bg-white relative"
                />
            ))}
        </>
    )
}

export default Stairs
