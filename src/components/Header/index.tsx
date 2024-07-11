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
            <Link href={"#inicio"} className="btn">
              <button>
                Início
              </button>
            </Link>

            <Link href={""} className="btn">
              <button>
                e-mail
              </button>
            </Link>
          </div>
        </Head>
        <Hr />
      </Fix>
    </>
  )
}