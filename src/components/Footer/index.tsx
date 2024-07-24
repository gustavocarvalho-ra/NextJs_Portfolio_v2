"use client"

import Link from "next/link"
import { Foot } from "./styles"
import { Hr } from "../Header/styles"

export default function Footer() {

  return(
    <>
      <Hr />
      <Foot>
        <h3>Agradeço imensamente por dedicar seu tempo à análise do meu projeto até aqui!</h3>
      </Foot>
    </>
  )
}