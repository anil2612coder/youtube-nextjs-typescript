"use client"

import Image from "next/image"
import Link from "next/link"



const Logo = () => {
  return (
    <Link href="/">
        <Image src="/images/youtubeLogo.png" alt="logo" className="hidden cursor-pointer mx-1 sm:block" height={50} width={120}/>
    </Link>
  )
}

export default Logo