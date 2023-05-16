import React, { useState, createContext, useEffect, useContext } from "react";

import CardGrid from "../components/card-grid";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col top-16 overflow-x-hidden">
      <Header></Header>
      <div className="flex flex-col md:flex-row flex-1mb-auto">
        <CardGrid></CardGrid>
      </div>
      <Footer></Footer>
    </main>
  );
}
