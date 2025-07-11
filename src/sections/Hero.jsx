import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { useEffect, useRef, useState } from "react";
import SplineViewer from "../components/SplineViewer";
const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `I help growing brands and startups gain an
unfair advantage through premium
results driven webs/apps`;

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-10">
        <SplineViewer
          url="https://prod.spline.design/KP3osfVf8mvjcz2d/scene.splinecode"
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </div>
      <div className="relative z-20">
        <AnimatedHeaderSection
          subTitle={"Aspiring Developer | Problem Solver"}
          title={"Riya Srivastava"}
          text={`Aspiring developer with a passion for turning ideas into impact—always learning,\n always building.`}
          textColor={"text-white"}
        />
      </div>
    </section>
  );
};

export default Hero;
