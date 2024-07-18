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
          <h1>Projetos:</h1>
          <div className="proje">
            {projects
            .map(item => (
                <div className="ft" key={item.id}>
                  <Image src={item.photo}  alt="test" sizes="100vh" width={180} height={210} style={{borderRadius: "8px", marginTop: "4px"}}/>
                  <Link href={item.linkUrl}>Link</Link>
                </div>
            ))}

          </div>
        </div>
      </Proj>
    </>
  )
}