"use client";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";

export default function Provider() {
    //add theme switch here
    return (
        <main className="flex w-full justify-center bg-p-gunmetal/95 text-p-cornsilk">
            <div className="flex flex-col w-full">
                {/* <Header /> */}
                <Landing />
                <Footer />
            </div>
        </main>
    )
}