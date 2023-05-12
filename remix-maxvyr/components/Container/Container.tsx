import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col h-full bg-slate-50">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
