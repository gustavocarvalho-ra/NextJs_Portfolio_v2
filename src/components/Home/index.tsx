"use client"

import Link from "next/link"
import Image from 'next/image';

import { Hom } from "./styles"
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";
import { Hr } from "../Header/styles";


export default function Home() {
  return(
    <Hom id="inicio">
      <Image src={"/back.jpeg"} alt="test" fill={true} style={{filter: "blur(8px)", objectFit: "cover", zIndex: "1"}} />
      <div className="apresentacao">
        <div className="apre">
          <h2>Olá!</h2>
          <h1>Meu nome é Gustavo</h1>
          <h2>Desenvolvedor Front-end</h2>
        </div>

        <div className="icons">
          <Link href={"https://github.com/gustavocarvalho-ra"} target="_blank">
            <FaGithub style={{fontSize: '1.7em', color: 'var(--prymary)' }}/>
          </Link>

          <Link href={""}>
            <TfiEmail style={{fontSize: '1.7em', color: 'var(--prymary)'}} />
          </Link>
          
          <Link href={"https://www.linkedin.com/in/gustavo-carvalho-7bb361205/"} target="_blank">
            <SiLinkedin style={{fontSize: '1.7em', color: 'var(--prymary)'}}/>
          </Link>

        </div>

        <div className="scroll">
          <div className="itens">
            <hr className="linha" />
            <h3 style={{display: "flex"}}>Scroll</h3>
            <hr className="linha" />
          </div>
          <Hr style={{width: "100vw"}} />
        </div>
      </div>
    </Hom>
  )
}