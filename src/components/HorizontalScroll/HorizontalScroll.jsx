import { useRef } from 'react';
import './HorizontalScroll.css';
import One from '/eating.jpg';
import Two from '/padel.jpg';
import Three from '/cine.jpg';
import Four from '/supermarket.jpg';
import { motion, useScroll, useTransform } from 'framer-motion';

const HorizontalScroll = () => {
    const targetRef = useRef(null);
    const{ scrollYProgress } = useScroll({target: targetRef});

    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

    return (
        <div className="carousel" ref={targetRef}>
            <div className="contentContainer">
                <motion.div className="images" style={{ x }}>
                    <motion.div className="imageItem" 
                    initial={{opacity: 0, y: 150}} 
                    whileInView={{opacity: 1, y: 0, threshold: 0.99}}
                    transition={{duration: 0.5, ease: 'easeOut'}}>
                        <h2 className="title">Eat with your friends...</h2>
                        <img src={One} alt="Some people eating" className="image" />
                    </motion.div>
                    <motion.div className="imageItem"
                    initial={{opacity: 0, y: 150}} 
                    whileInView={{opacity: 1, y: 0, threshold: 0.99}}
                    transition={{duration: 0.5, ease: 'easeOut'}}>
                        <img src={Two} alt="Padel" className="image" />
                        <h2 className="title">Play whatever you want...</h2>
                    </motion.div>
                    <motion.div className="imageItem"
                    initial={{opacity: 0, y: 150}} 
                    whileInView={{opacity: 1, y: 0, threshold: 0.99}}
                    transition={{duration: 0.5, ease: 'easeOut'}}>
                        <h2 className="title">Go to every event...</h2>
                        <img src={Three} alt="People in cinema" className="image" />
                    </motion.div>
                    <motion.div className="imageItem"
                    initial={{opacity: 0, y: 150}} 
                    whileInView={{opacity: 1, y: 0, threshold: 0.99}}
                    transition={{duration: 0.5, ease: 'easeOut'}}>
                        <img src={Four} alt="Supermarket" className="image" />
                        <h2 className="title">Buy some groceries...</h2>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default HorizontalScroll;