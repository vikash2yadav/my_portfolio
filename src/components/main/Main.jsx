import "./main.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        },
    },
}

const Main = () => {
    return (
        <div className="main">
            <div className="wrapper">

                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate" >
                    <motion.h2 variants={textVariants}>Your Name</motion.h2>
                    <motion.h1 variants={textVariants}>Web developer and designer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>See the Latest Works </motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="./scroll.png" alt="" />
                </motion.div>
            </div>
            <div className="slidingTextContainer">
                Write content creator
            </div>
            <div className="imageContainer">
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Main