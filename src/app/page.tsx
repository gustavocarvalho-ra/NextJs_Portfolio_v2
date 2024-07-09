"use client"

import Image from "next/image";

import Header from "@/components/Header";
import Link from 'next/link';


export default function Home() {
  <>
    <Header />
    <div>
      <p>test</p>
      <Link href={"/"}>voltar</Link>
    </div>
  </>
}
