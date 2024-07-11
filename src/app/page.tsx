"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import { Pag } from "./styles";
import Info from "@/components/Info";

export default function Home() {
  return (
    <Pag>
      <Header />
      <Info />
    </Pag>
  );
}
