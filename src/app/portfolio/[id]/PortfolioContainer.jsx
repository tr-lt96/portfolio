"use client";

import { ArrowLeft } from "@/_components/icon";
import { PROJECT_FILE_PATH } from "@/_data/constants";
import { fontSecondary } from "@/_utils/fonts";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function PortfolioContainer({ portfolio }) {
  const router = useRouter();
  const goBack = () => router.push("/");

  if (!portfolio) {
    return null;
  }

  const projectPath = `${process.env.NEXT_PUBLIC_BASE_PATH}/${PROJECT_FILE_PATH}/${portfolio.publicId}`

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-screen h-[250px] block bg-p-cinnabar bg-contain bg-center" style={{backgroundImage: `url("${projectPath}/img.png")`}}></div>
      <div className="max-w-[1000px] w-full px-8 md:px-12 mt-16 flex flex-col gap-8">
        <button type="button" onClick={goBack} className="flex flex-row items-center">
          <ArrowLeft className={"w-4 h-4 text-p-cornsilk fill-p-cornsilk mr-2"} />
          Back
        </button>
        <h1 className={`${fontSecondary.className} uppercase`}>{portfolio.title}</h1>
        <p>{portfolio.description}</p>
        <Link
          href={`${projectPath}/file.pdf`}
          target={"_blank"}
          download={`${portfolio.publicId}.pdf`}
          className={`${fontSecondary.className} rounded-lg text-p-cinnabar py-2 px-4 w-fit uppercase text-base font-semibold border-2 border-p-charcoal`}>
          Download project
        </Link>
        <div>
          <iframe type={"application/pdf"} src={`${projectPath}/file.pdf`} className={"w-full h-[900px]"}></iframe>
        </div>
      </div>
    </div>
  );
}
