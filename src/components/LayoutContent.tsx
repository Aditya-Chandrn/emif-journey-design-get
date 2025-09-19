"use client";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import React from "react";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div
      style={{
        width: "390px",
        height: "844px",
        boxShadow: "0 0 0 0 #0000",
        background: "#fff",
        overflow: "hidden",
        borderRadius: "0px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {pathname !== "/login" && <Navbar />}
      {children}
    </div>
  );
}
