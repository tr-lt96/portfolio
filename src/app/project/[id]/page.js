import PORTFOLIO from "@/_data/portfolio";
import { PortfolioContainer } from "./PortfolioContainer";

export function generateStaticParams() {
  return PORTFOLIO.map((_portfolio, index) => ({
    id: `${index + 1}`
  }))
}

export default function Page({ params }) {
  const portfolioId = parseInt(params?.id)
  const portfolio =
    isNaN(portfolioId) || portfolioId < 1 || portfolioId > PORTFOLIO.length
      ? undefined
      : PORTFOLIO[portfolioId - 1]

  if (!portfolio) {
    return null;
  }

  return (
    <PortfolioContainer portfolio={portfolio}/>
  );
}
