"use client"
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"

import { Proj } from "./styles"
import projec from "../../data/projec.json"

export default function Project() {

  let projects = [...projec];

  const proje = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    // console.log(proje.current?.scrollWidth, proje.current?.offsetWidth)
    if (proje.current) {
      const scrollWidth = proje.current?.scrollWidth;
      const offsetWidth = proje.current?.offsetWidth;
      setWidth(scrollWidth + 540 - offsetWidth)
    }
  }, [width])

    return (
      <>
        <Proj id="project">
          <div className="container">
            <h1 className="title">Projetos</h1>
            <motion.div ref={proje} className="proje" whileTap={{cursor: "grabbing"}}>
              <motion.div className="inner" drag="x" dragConstraints={{right: 0, left: -width}}>
                {projects
                  .map(item => (
                  <motion.div className="card" key={item.id}>
                    <h1 className="titleProj">{item.name}</h1>
                    <div className="img">
                      <Image src={item.photo} alt="test" width={495} height={250} quality={100} style={{ objectFit: "contain" }} />
                    </div>
                    <div className="descricao">
                      <p>
                        {item.description}
                      </p>
                      <p>
                        {item.subDescription}
                      </p>
                    </div>
                    <Link href={item.linkUrl} className="link" target="_blank">
                      <button className="li">
                        Visitar projeto
                      </button>
                    </Link>
                  </motion.div>
                  ))
                }
                <p>Mais projetos em breve!</p>
              </motion.div>
            </motion.div>
          </div>
        </Proj>
      </>
    );
  }