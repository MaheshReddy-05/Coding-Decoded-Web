import React from 'react';
import Cards from "../Cards";
import CDP from "../CDP";
import WYG from "../WYG";
import HROH from "../HROH";
import L from "../HROH/L"
import Community from "../Community";
import OSPA from "../OSPA";
import Footer from "../Footer";


export default function HomepageFeatures() {
  return (
    <div>
        <Cards></Cards>
        <CDP></CDP>
        <WYG></WYG>
        <HROH></HROH>
        <L></L>
        <OSPA></OSPA>
        <Community></Community>
        <Footer></Footer>
    </div>
  );
}
