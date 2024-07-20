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
                  <h1 className="titleProj">{item.name}</h1>
                  <div className="img">
                    <Image src={item.photo} alt="test" width={495} height={250} quality={100} style={{objectFit: "contain"}}/>
                  </div>
                  <p className="descricao">
                  Este projeto, desenvolvido para uma loja de roupas fictícia, utiliza um banco de dados local para gerenciar o estoque e as informações dos produtos. Com foco na experiência do usuário, o projeto implementa funcionalidades de filtragem e categorização de produtos, utilizando os métodos .map e .filter para otimizar a navegação e a busca por itens específicos.
                  <br />
                  A aplicação permite que os clientes explorem as diferentes categorias de roupas, filtradas por estilos, proporcionando uma experiência de compra personalizada e eficiente.
                  </p>
                  <Link href={item.linkUrl} className= "link" target="_blank">
                    <button className="li">
                      Visitar projeto
                    </button>
                  </Link>
                </div>
            ))}
          </div>
        </div>
      </Proj>
    </>
  )
}