import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="container relative z-20 flex flex-col justify-center top-0 px-8 md:px-0 md:top-26 text-white">
      <motion.h1
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
        className="text-3xl md:text-7xl font-bold uppercase md:w-170"
      >
        Bringing Stories to Life Through Video
      </motion.h1>

      <motion.p
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
        className="mt-4 text-base max-w-xl"
      >
        From high-impact commercials to engaging animations, we craft visuals that captivate and convert. Let’s create something extraordinary together!
      </motion.p>

      <motion.button
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
        className="bg-lime-400 text-black px-6 py-3 my-8 w-fit"
      >
        Explore Our Services
      </motion.button>
    </div>
  );
};

export default HeroSection;