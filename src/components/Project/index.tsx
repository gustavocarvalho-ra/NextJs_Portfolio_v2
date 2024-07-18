"use client"

import { Proj } from "./styles"


export default function Project() {

  // const [pro, setPro] = useState<Tec[]>([
  //   { id: "proj0", name: "", icon: < /> },

  // ]);


  return(
    <>
      <Proj id="project">
        <div className="container">
          <h1>Projetos:</h1>
          <div className="proje">
            {/* {ski.map(tech => 
              <div className="card" key={tech.id}>
                <h1 className="icon">
                  {tech.icon}
                </h1>
                <h3 className="nameIcon">
                  {tech.name}
                </h3>
              </div>
            )} */}

          </div>
        </div>
      </Proj>
    </>
  )
}