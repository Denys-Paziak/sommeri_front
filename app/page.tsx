"use client";

import Header from "@/app/components/header/Header";
import HomePage from "@/app/components/home/HomePage";

import dynamic from "next/dynamic";
import CustomCursor from "@/app/components/UI/customCursor/CustomCursor";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
});

export default function Home() {
    return (
        <div>
            <CustomCursor/>
            <Header/>
            <HomePage/>
        </div>
    );
}
