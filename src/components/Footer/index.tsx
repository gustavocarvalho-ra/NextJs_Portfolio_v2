"use client"

import Link from "next/link"
import { Foot } from "./styles"

export default function Header() {

  return(
    <>
      <Foot>
        <h1>Criado por: 
          <Link href={"https://www.linkedin.com/in/gustavo-carvalho-7bb361205/"} target="_blank">
            Gustavo
          </Link>
        </h1>
      </Foot>
    </>
  )
}