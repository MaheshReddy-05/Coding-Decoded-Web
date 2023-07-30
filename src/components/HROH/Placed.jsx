import React from 'react';
import { useState, useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Iteam from "../slider/Iteam";
import DeepeshGodara from "../../assets/images/HROH/DeepeshGodara.jpg"
import HimanshuYadav from "../../assets/images/HROH/HimanshuYadav.jpg"
import AnilSharma from "../../assets/images/HROH/AnilSharma.jpg"
import YeshwanthChintaginjala from "../../assets/images/HROH/YeshwanthChintaginjala.jpg"
import NancyAgarwal from "../../assets/images/HROH/NancyAgarwal.jpg"
import AdamKniffin from "../../assets/images/HROH/AdamKniffin.jpg"
import YajasSardana from "../../assets/images/HROH/YajasSardana.jpg"
import AbhishekJain from "../../assets/images/HROH/AbhishekJ.jpg"
import SonalKumar from "../../assets/images/HROH/SonalKumar.jpg"
import PranavSharma from "../../assets/images/HROH/PranavSharma.jpg"
import RajatKumar from "../../assets/images/HROH/RajatKumar.jpg"

export default function Placed() {
  const splideRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const teamData = [
    {
      id: 1,
      image: DeepeshGodara,
      name: "Deepesh Godara",
      role: "",
      about: "",
    },
    {
      id: 2,
      image: HimanshuYadav,
      name: "Himanshu Yadav",
      role: "",
      about: "",
    },
    {
      id: 3,
      image: AnilSharma,
      name: "Anil Sharma",
      role: "",
      about: "",
    },
    {
      id: 4,
      image: YeshwanthChintaginjala,
      name: "Yeshwanth Chintaginjala",
      role: "",
      about: "",
    },
    {
      id: 5,
      image: NancyAgarwal,
      name: "Nancy Agarwal",
      role: "",
      about: "",
    },
    {
      id: 6,
      image: AdamKniffin,
      name: "Adam Kniffin",
      role: "",
      about: "",
    },
    {
      id: 7,
      image: YajasSardana,
      name: "Yajas Sardana",
      role: "",
      about: "",
    },
    {
      id: 8,
      image: AbhishekJain,
      name: "Abhishek Jain",
      role: "",
      about: "",
    },
    {
      id: 9,
      image: SonalKumar,
      name: "Sonal Kumar",
      role: "",
      about: "",
    },
    {
      id: 10,
      image: PranavSharma,
      name: "Pranav Sharma",
      role: "SWE @ Qualcomm",
      about: "",
    },
    {
      id: 11,
      image: RajatKumar,
      name: "Rajat Kumar",
      role: "",
      about: "",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMouseOver) {
        splideRef.current.go(">");
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [isMouseOver]);

  const onSlideMoved = (splide) => {
    setActiveSlide(splide.index % 3);
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Splide
        ref={splideRef}
        options={{
          type: "loop",
          height: "30rem",
          drag: "free",
          perPage: 1,
          arrows: false,
          pagination: false,
          pauseOnHover: false,
          lazyLoad: "nearby",
          gap: 5,
          padding: {
            right: "30%",
            left: "37%",
          },
        }}
        onMoved={onSlideMoved}
      >
        {teamData.map((person) => (
          <SplideSlide key={person.id}>
            <Iteam Im={person.image} name={person.name} role={person.role} about={person.about} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
