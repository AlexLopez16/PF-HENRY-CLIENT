import React from 'react';
import images from '../../components/exports/images';
import style from '../../styles/carousel.module.css';
import { motion } from 'framer-motion';

const Carousel = () => {
  return (
    <motion.div className={style.sliderContainer} style={{paddingBottom: 100, paddingTop: 50}}>
      <motion.div
        className={style.slider}
        animate={{
          translateX:160
        }}
        drag='x'
        dragConstraints={{ right: 0, left: -7300 }}
      >
        {images.map((image) => (
          <motion.div className={style.item}>
            <img src={image} alt='' style={{height: 150, width: 300, borderRadius: 30}}/>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
