"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import { Pag } from "./styles";
import Info from "@/components/Info";
import Home from "@/components/Home";

export default function Page() {
  return (
    <Pag>
      <Header />
      <Home />
      <Info />
    </Pag>
  );
}
