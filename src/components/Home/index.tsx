"use client"

import Link from "next/link"
import Image from 'next/image';

import { Hom } from "./styles"


export default function Home() {
  return(
    <Hom id="inicio">
      <Image src={"/back.jpeg"} alt="test" fill={true} style={{filter: "blur(12px)", objectFit: "cover", zIndex: "1"}} />
      <div className="apresentacao">
        <h2>Olá!</h2>
        <h1>Meu nome é Gustavo</h1>
        <h2>Desenvolvedor Front-end</h2>

        <div className="icons">

        </div>
      </div>
    </Hom>
  )
}