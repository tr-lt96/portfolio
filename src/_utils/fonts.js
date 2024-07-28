import { Roboto_Slab, Roboto_Mono } from "next/font/google";

export const fontPrimary = Roboto_Slab({ 
  subsets: ["latin"], 
  weight: ["300","400", "500", "600", "700"] 
});

export const fontSecondary = Roboto_Mono({ 
    subsets: ["latin"], 
    weight: ["200", "300", "400"] 
  });