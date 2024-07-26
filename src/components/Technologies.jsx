import { SiPython, SiCplusplus, SiSwift, SiFlask, SiMongodb, SiHtml5, SiCss3, SiJavascript, SiFigma, SiAdobeillustrator, SiFirebase, SiTableau, SiWordpress } from "react-icons/si";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { RiFlutterFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { animate, motion } from "framer-motion"

const iconVariants= (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity: 1, x: 0}}
      initial= {{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 1, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(3)}
        initial="initail"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3.2)}
        initial="initail"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCplusplus className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initail"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSwift className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initail"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFlask className="text-7xl text-white" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4.5)}
        initial="initail"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiFlutterFill className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initail"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4.5)}
        initial="initail"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FiDatabase className="text-7xl text-purple-500" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initail"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiHtml5 className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initail"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCss3 className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3.2)}
        initial="initail"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initail"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initail"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initail"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFigma className="text-7xl text-purple-600" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4.5)}
        initial="initail"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAdobeillustrator className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initail"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFirebase className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4.5)}
        initial="initail"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTableau className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initail"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiWordpress className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initail"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <AiFillGithub className="text-7xl text-white" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies;
