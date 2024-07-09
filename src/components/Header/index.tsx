"use client"

import Link from "next/link";

import { Head } from "./styles"; 

export default function Header() {

  return (
    <>
      <Head>
        <p>test</p>
        <Link href={"/"}>Voltar</Link>
      </Head>
    </>
  )
}