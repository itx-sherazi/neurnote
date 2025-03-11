import Image from 'next/image'
import React from 'react'
import logo from "../../public/assets/logo.png"
export default function Logo() {
  return (
    <Image src={logo} alt='' width={100} height={100}/>
)
}
