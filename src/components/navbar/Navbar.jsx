import { motion } from "framer-motion"
import "./navbar.scss"
import Sidebar from "../../components/sidebar/Sidebar"

const Navbar = () => {
    return (
        <motion.div className='navbar'>
            <Sidebar />
            <motion.div className='wrapper'>

                <motion.span 
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }}
                >My Portfolio</motion.span>

                <motion.div className='social'>
                    <a href=""><img src="./facebook.png" alt="" /></a>
                    <a href=""><img src="./instagram.png" alt="" /></a>
                    <a href=""><img src="./dribbble.png" alt="" /></a>
                </motion.div>
            </motion.div>

        </motion.div>
    )
}

export default Navbar