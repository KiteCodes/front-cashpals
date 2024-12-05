import { useRef } from 'react';
import './HorizontalScroll.css';
import One from '../../../public/eating.jpg';
import { motion, useScroll, useTransform } from 'framer-motion';
import ImageContainer from '../ImageContainer/ImageContainer.jsx';

const HorizontalScroll = () => {
    const targetRef = useRef(null);
    const{ scrollYProgress } = useScroll({target: targetRef});

    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-55%']);

    return (
        <div className="carousel" ref={targetRef}>
            <div className="contentContainer">
                <motion.div className="images" style={{ x }}>
                    <motion.div className="imageItem" 
                    initial={{opacity: 0, y: 150}} 
                    whileInView={{opacity: 1, y: 0, threshold: 0.99}}
                    transition={{duration: 0.5, ease: 'easeOut'}}>
                        <ImageContainer imageSource={One} description='1' />
                    </motion.div>
                    <motion.div className="imageItem"
                    initial={{opacity: 0, y: 150}} 
                    whileInView={{opacity: 1, y: 0, threshold: 0.99}}
                    transition={{duration: 0.5, ease: 'easeOut'}}>
                        <ImageContainer imageSource={One} description='2' />
                    </motion.div>
                    <motion.div className="imageItem"
                    initial={{opacity: 0, y: 150}} 
                    whileInView={{opacity: 1, y: 0, threshold: 0.99}}
                    transition={{duration: 0.5, ease: 'easeOut'}}>
                        <ImageContainer imageSource={One} description='3' />
                    </motion.div>
                    <motion.div className="imageItem"
                    initial={{opacity: 0, y: 150}} 
                    whileInView={{opacity: 1, y: 0, threshold: 0.99}}
                    transition={{duration: 0.5, ease: 'easeOut'}}>
                        <ImageContainer imageSource={One} description='4' />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default HorizontalScroll;