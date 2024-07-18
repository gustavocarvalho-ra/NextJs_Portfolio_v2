"use client"

import Image from "next/image";
import Link from "next/link";

import { Proj } from "./styles"
import projec from "../../data/projec.json"


export default function Project() {

  let projects = [...projec];

  // const [pro, setPro] = useState<Tec[]>([
  //   { id: "proj0", name: "", icon: < /> },

  // ]);


  return(
    <>
      <Proj id="project">
        <div className="container">
          <h1 className="title">Projetos</h1>
          <div className="proje">
            {projects
            .map(item => (
                <div className="card" key={item.id}>
                  <div className="img">
                    <Image src={item.photo} alt="test" width={380} height={250} quality={100} style={{objectFit: "contain"}}/>
                  </div>
                  <Link href={item.linkUrl}>Link</Link>
                </div>
            ))}

          </div>
        </div>
      </Proj>
    </>
  )
}