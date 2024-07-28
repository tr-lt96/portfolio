import { Header, Landing, Footer } from "@/_components";

export default function App() {
  return (
    <main className="w-full text-d-foreground">
      <div className="flex flex-col w-full items-center relative">
        <Header />
        <Landing />
        <Footer />
      </div>
    </main>
  );
}
