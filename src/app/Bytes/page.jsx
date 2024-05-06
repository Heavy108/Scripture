// 'use client'
import "../global.css";
import MagCard from "../../Helper/Mag_Intro_Card";
import NavBar from "../../Helper/NavBar";
import Mag_Section from "../../Helper/MagCluster";
import Footer from "../../Helper/Footer";
import { fetchData } from "../api/Bytes/route";

const data = await fetchData();
// const serializedData = data.map((item) => item.toObject());

function Byte() {
  const Title = "Bytes";
  const Image = "/Byte.svg";
  const Description =
    "< Byte Description > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";
  return (
    <>
      <NavBar />
      <MagCard title={Title} image={Image} Info={Description} />
      <Mag_Section Data={data} MagazinesPerPage={3} />

      <Footer />
    </>
  );
}
export default Byte;
