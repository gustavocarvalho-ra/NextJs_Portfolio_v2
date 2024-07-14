"use client"

import Link from "next/link"

import { Fix, Head, Hr } from "./styles"


export default function Header() {

  // const LinkScroll = () => {
  //   return (
  //     <Link legacyBehavior href="#inicio">
  //       <a>test</a>
  //     </Link>
  //   );
  // };

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
          </div>
        </Head>
        <Hr />
      </Fix>
    </>
  )
}