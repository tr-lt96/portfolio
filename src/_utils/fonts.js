import { Roboto_Slab, Montserrat, Roboto_Mono } from "next/font/google";

export const fontPrimary = Montserrat({ 
  subsets: ["latin"], 
  weight: ["300","400", "500", "600", "700"] 
});

export const fontSecondary = Roboto_Mono({ 
    subsets: ["latin"], 
    weight: ["300", "400", "500", "600", "700"] 
  });