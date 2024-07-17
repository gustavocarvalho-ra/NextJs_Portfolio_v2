"use client"

import { Pag } from "./styles";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Info from "@/components/Info";
import Skills from "@/components/Skills";
import Project from "@/components/Project";

export default function Page() {
  return (
    <Pag>
      <Header />
      <Home />
      <Info />
      <Skills />
      <Project />
    </Pag>
  );
}
