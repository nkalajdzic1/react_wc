import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export interface IPageProps {
  children: any;
}

function Page({ children }: IPageProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Page;
