// 'use client'

// import Link from "next/link"

// import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
// const Socials = [
//     { icon: <FaGithub />, path: 'https://github.com/sujith2690/' },
//     { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/sujith-p/' },
//     // { icon: <FaYoutube />, path: '' },
//     // { icon: <FaTwitter />, path: '' },
// ]

// const Social = ({ containerStyles, iconStyles }) => {
//     return (
//         <div className={containerStyles} >
//             {
//                 Socials.map((item, i) => {
//                     return (
//                         <Link key={i} href={item.path} className={iconStyles} >
//                             {item.icon}
//                         </Link>
//                     )
//                 })
//             }

//         </div>
//     )
// }

// export default Social


'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Socials = [
    { icon: <FaGithub />, path: 'https://github.com/sujith2690/' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/sujith-p-/' },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {Socials.map((item, i) => (
                <a
                    key={i}
                    href={item.path}
                    className={iconStyles}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {item.icon}
                </a>
            ))}
        </div>
    );
}

export default Social;
