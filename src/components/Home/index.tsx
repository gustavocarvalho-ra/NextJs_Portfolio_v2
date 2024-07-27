"use client"

import Link from "next/link"
import Image from 'next/image';

import { Hom } from "./styles"
import { Hr } from "../Header/styles";
import { TfiEmail } from "react-icons/tfi";
import { SiLinkedin } from "react-icons/si";
import { FaGithub, FaArrowDown } from "react-icons/fa";


export default function Home() {
  return(
    <Hom id="inicio">
      <Image src={"/back.jpeg"} alt="test" fill={true} priority={true} style={{filter: "blur(8px)", objectFit: "cover", zIndex: "1"}} />
      <div className="apresentacao">
        <div className="apre">
          <h2>Olá!</h2>
          <h1>Meu nome é Gustavo</h1>
          <h2>Desenvolvedor Front-end</h2>
        </div>

        <div className="icons">
          <Link href={"https://github.com/gustavocarvalho-ra"} target="_blank">
            <FaGithub className="ico" style={{fontSize: '1.7em', color: 'var(--prymary)' }}/>
          </Link>

          <Link href={""}>
            <TfiEmail className="ico" style={{fontSize: '1.7em', color: 'var(--prymary)'}} />
          </Link>
          
          <Link href={"https://www.linkedin.com/in/gustavo-carvalho-7bb361205/"} target="_blank">
            <SiLinkedin className="ico" style={{fontSize: '1.7em', color: 'var(--prymary)'}}/>
          </Link>

        </div>

        <div className="scroll">
          <div className="itens">
            <hr className="linha" />
            <h3 style={{display: "flex"}}>Scroll</h3>
            <hr className="linha" />
          </div>
          <Hr style={{width: "100vw"}} />
          <FaArrowDown style={{fontSize: "1.5em"}}/>
        </div>
      </div>
    </Hom>
  )
}