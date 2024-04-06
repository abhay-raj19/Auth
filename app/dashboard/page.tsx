"use client"
import React from 'react'
import {Spotlight} from "../../components/ui/Spotlight"
import { signOut } from "next-auth/react";
import { useRouter } from 'next/router';
const logout = () => {
  window.location.href = "/";
  signOut();

}
export default function page() {
  
  return (
    <div className="h-screen w-full  flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
    <Spotlight
      className="-top-40 left-0 md:left-60 md:-top-20"
      fill="white"
    />
    <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        NextAuth <br /> Is the new trend.
      </h1>
      <div className="flex justify-center py-4">
      <button onClick={logout} className="flex justify-center dark:bg-white rounded-full w-fit  dark:text-black px-4 py-2">
          Logout now
        </button>
        </div>
    </div>
  </div>
  )
}
