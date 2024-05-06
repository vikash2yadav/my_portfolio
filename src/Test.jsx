import { useState } from 'react'
import { delay, motion } from 'framer-motion'

const Test = () => {

    const [open, setOpen] = useState(false);

    const variants = {
        visible: (i) => ({
            opacity: 1,
            x:100,
            transition: { delay: i * 0.3 }
        }),
        hidden: { opacity: 0 }
    }

    const items = ["item1", "item2", "item3", "item4", "item5"];

    return (
        <div>
            <div className='course'>
                <motion.ul variants={variants} initial="hidden" animate="visible" >
                    {items.map((item, i) => (
                        <motion.li variants={variants} key={item} custom={i}> {item} </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    )
}

export default Test