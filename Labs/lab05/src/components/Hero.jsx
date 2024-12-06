"use client";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import message from "../assets/icon2.png";
import { motion } from "framer-motion";
import profilePic from "../assets/profilePic.png";

const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBA6FE_80%)]">
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] bg-black top-[550px] left [50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>
      <div>
        <div className="text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-[#E48A57]">Arman R.</h1>
        </div>

        <motion.div
          className="absolute left-[280px] top-[170px]"
          drag
          dragConstraints={{ top: -100, bottom: 100, left: -100, right: 100 }}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
        >
          <Image
            src={cursor}
            height="170"
            width="170"
            alt="Draggable cursor icon representing interactivity."
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="absolute right-[220px] top-[20px]"
          drag
          dragConstraints={{ top: -100, bottom: 100, left: -100, right: 100 }}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
        >
          <Image
            src={lightning}
            height="120"
            width="120"
            alt="Draggable cursor icon representing interactivity."
            draggable="false"
          />
        </motion.div>

        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
          I am a full-stack developer focused on creating websites that provide
          the best experience for users.
        </p>

        <Image
          src={profilePic}
          alt="profile picture"
          className="h-auto w-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
