import PROJECTS from "@/_components/landing/projects/data/projects";
import { PortfolioContainer } from "./PortfolioContainer";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.publicId,
  }));
}

export default function Page({ params }) {
  const projectSlug = params.slug;
  const project = PROJECTS.find(({ publicId }) => publicId === projectSlug);

  if (!project) {
    return null;
  }

  return <PortfolioContainer portfolio={project} />;
}
