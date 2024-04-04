"use client";

import { ArrowLeft } from "@/_components/icon";
import { fontSecondary } from "@/_utils/fonts";
import { useRouter } from "next/navigation";

export function PortfolioContainer({portfolio}) {
  const router = useRouter();
  const goBack = () => router.push("/");

  if (!portfolio) {
    return null;
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-screen h-[250px] bg-p-cinnabar block"></div>
      <div className="max-w-[1000px] w-full px-8 md:px-12 mt-16">
        <button type="button" onClick={goBack} className="flex flex-row items-center">
            <ArrowLeft className={'w-4 h-4 text-p-cornsilk fill-p-cornsilk mr-2'}/>
            Back
        </button>
        <h1 className={`${fontSecondary.className} uppercase mt-8`}>{portfolio.title}</h1>
        <p className="mt-8">{portfolio.description}</p>
      </div>
    </div>
  );
}
