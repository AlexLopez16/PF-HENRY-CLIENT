import React from 'react';
import images from '../../components/exports/images';
import style from '../../styles/carousel.module.css';
import { motion } from 'framer-motion';

const Carousel = () => {
  return (
    <motion.div className={style.sliderContainer} style={{paddingBottom: 200}}>
      <motion.div
        className={style.slider}
        drag='x'
        dragConstraints={{ right: 0, left: -9000 }}
      >
        {images.map((image) => (
          <motion.div className={style.item}>
            <img src={image} alt='' style={{height: 200, width: 350, borderRadius: 30}}/>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
