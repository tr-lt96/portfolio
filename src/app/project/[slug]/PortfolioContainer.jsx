"use client";

import { PROJECT_FOLDER } from "@/_data/constants";
import { fontSecondary } from "@/_utils/fonts";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function PortfolioContainer({ portfolio }) {
  const router = useRouter();
  const goBack = () => router.push("/");

  if (!portfolio) {
    return null;
  }

  const projectPath = `${PROJECT_FOLDER}/${portfolio.publicId}`
  const relativePath = `${process.env.NEXT_PUBLIC_BASE_PATH}/${projectPath}`

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-screen h-[250px] block border-0 relative">
        <Image src={`${relativePath}/img.png`} alt="" fill style={{ objectFit: 'cover' }}/>
      </div>
      <div className="max-w-[1000px] w-full px-8 md:px-12 mt-16 flex flex-col gap-8">
        <button type="button" onClick={goBack} className="flex flex-row items-center">
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
          <iframe type={"application/pdf"} src={`${relativePath}/file.pdf`} className={"w-full h-[900px]"}></iframe>
        </div>
      </div>
    </div>
  );
}
