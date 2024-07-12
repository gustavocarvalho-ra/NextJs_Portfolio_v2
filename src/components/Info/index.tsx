"use client"

import Link from "next/link"

import { Inf } from "./styles"
import Image from "next/image"


export default function Info() {
  return(
    <>
      <Inf id="info">
        <div className="container">
          <h1>Sobre</h1>
          <Image src={"/perfil.jpg"} alt={"Imagem de perfil"} width={200} height={200}></Image>
        </div>
      </Inf>
    </>
  )
}