"use client"

import Link from "next/link"
import Image from "next/image"

import { Head, Hr } from "./styles"



export default function Header() {
  return(
    <>
      <Head>
        <h1>Gustavo <span>Carvalho</span></h1>
        <div className="ctt">
          <Link href={""}>whatsapp</Link>
          <Link href={""}>email</Link>
        </div>
      </Head>
      <Hr />
    </>
  )
}