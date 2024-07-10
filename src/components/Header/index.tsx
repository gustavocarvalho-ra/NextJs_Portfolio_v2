"use client"

import Link from "next/link"
import Image from "next/image"

import { Head } from "./styles"



export default function Header() {
  return(
    <>
      <Head>
        <h1>Gustavo <span>Carvalho</span></h1>
        <div className="ctt">
          <Link href={""}>whatsapp</Link>
          <Link href={""} style={{marginLeft: "1em"}}>email</Link>
        </div>
      </Head>
      <hr className="hr01"/>
    </>
  )
}