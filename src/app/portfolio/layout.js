import { Header, Footer } from "@/_components";

export default function Layout({ children, ...props }) {
  return (
    <div className="flex flex-col w-full items-center relative text-p-cornsilk ">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
