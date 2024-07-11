"use client"

import Link from "next/link"
import Image from 'next/image';

import { Hom } from "./styles"


export default function Home() {
  return(
    <Hom id="inicio">
      <Image src={"/back.jpeg"} alt="test" fill={true} style={{filter: "blur(14px)", objectFit: "cover"}} />
    </Hom>
  )
}