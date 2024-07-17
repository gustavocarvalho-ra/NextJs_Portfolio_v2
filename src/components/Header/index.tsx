"use client"

import Link from "next/link"

import { Fix, Head, Hr } from "./styles"


export default function Header() {

  return(
    <>
      <Fix>
        <Head>
          <h1>Gustavo <span>Carvalho</span></h1>
          <div className="ctt">
            <Link href="#inicio" className="btn">
              Início
            </Link>

            <Link href={"#info"} className="btn">
              Sobre
            </Link>

            <Link href={"#skills"} className="btn">
              Skills
            </Link>

            <Link href={"#project"} className="btn">
              Projetos
            </Link>
          </div>
        </Head>
        <Hr />
      </Fix>
    </>
  )
}