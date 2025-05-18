'use client'

import Link from "next/link"

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
const Socials = [
    { icon: <FaGithub />, path: '' },
    { icon: <FaLinkedin />, path: '' },
    { icon: <FaYoutube />, path: '' },
    { icon: <FaTwitter />, path: '' },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles} >
            {
                Socials.map((item, i) => {
                    return (
                        <Link key={i} href={item.path} className={iconStyles} >
                            {item.icon}
                        </Link>
                    )
                })
            }

        </div>
    )
}

export default Social