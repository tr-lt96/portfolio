"use client";
import { Header, Landing, Footer } from "@/_components";

export default function App() {
  return (
    <main className="w-full text-p-cornsilk">
      <div className="flex flex-col w-full relative">
        <Header />
        <Landing />
        <Footer />
      </div>
    </main>
  );
}
