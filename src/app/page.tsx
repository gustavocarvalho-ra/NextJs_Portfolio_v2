"use client"

import Image from "next/image";

import Header from "@/components/Header";
import Link from 'next/link';


export default function Home() {
  <>
    <h1>test</h1>
    <Header />
    <div>
      <p>test</p>
      <Link href={"/"}>voltar</Link>
    </div>
  </>
}
