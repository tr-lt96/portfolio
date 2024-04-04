"use client";

import { ArrowLeft } from "@/_components/icon";
import PORTFOLIO from "@/_data/portfolio";
import { fontSecondary } from "@/_utils/fonts";
import { useRouter } from "next/navigation";

export function generateStaticPaths() {
  return {
    paths: PORTFOLIO.map((_portfolio, index) => ({
      params: {id: `${index + 1}`}
    }))
  }
}

export default function Page({ params }) {
  const portfolioId = parseInt(params?.id)
  const portfolio =
    isNaN(portfolioId) || portfolioId < 1 || portfolioId > PORTFOLIO.length
      ? undefined
      : PORTFOLIO[portfolioId - 1]
  const router = useRouter();
  const goBack = () => router.push("/");

  if (!portfolio) {
    return null;
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-screen h-[250px] bg-p-charcoal/50 block"></div>
      <div className="max-w-[1000px] w-full px-8 md:px-12 mt-16">
        <button type="button" onClick={goBack} className="flex flex-row items-center">
          <ArrowLeft className={'w-4 h-4 text-p-cornsilk fill-p-cornsilk mr-2'} />
          Back
        </button>
        <h1 className={`${fontSecondary.className} uppercase mt-8`}>{portfolio.title}</h1>
        <p className="mt-8">{portfolio.description}</p>
      </div>
    </div>
  );
}
