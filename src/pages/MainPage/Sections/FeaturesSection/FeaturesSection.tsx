import React, {FC, useRef, useState} from 'react';
import {FEATURES_CARDS} from 'constants/';
import {FeatureItem} from './FeatureItem';
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import {EffectCoverflow} from "swiper/modules";
import arrow from 'assets/icons/arrowVerticalLong.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import styles from './FeaturesSection.module.scss';
import * as ISwiper from 'swiper';

const FeaturesSection: FC = () => {
    const swiperRef = useRef<SwiperRef | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleGoToSlide = (index: number) => {
        swiperRef.current?.swiper.slideTo(index);
    };

    const handleNavigation = (type: 'next' | 'back') => {
        if (type === 'next') {
            swiperRef.current?.swiper.slideNext();
        } else {
            swiperRef.current?.swiper.slidePrev();
        }
        swiperRef.current?.swiper.updateSlidesClasses();
    };

    const activeIndexChange = ({activeIndex}: ISwiper.Swiper) => {
        setActiveIndex(activeIndex);
    };

    return (
        <section className={styles.container}>
            <div className={styles.sectionHeading}>
                <h2>features</h2>
                <p>Manage positions on</p>
            </div>

            <div className={styles.contentContainer}>
                <ul className={styles.featuresList}>
                    {FEATURES_CARDS.map(({id, title}) => (
                        <li onClick={() => handleGoToSlide(id)} key={id} className={id === activeIndex ? styles.activeFeature : styles.inactiveFeature}>
                            <p>{title}</p>
                        </li>
                    ))}
                </ul>

                <div className={styles.sliderWrapper}>
                    <Swiper
                        
                        ref={swiperRef}
                        effect={'coverflow'}
                        grabCursor
                        direction="vertical"
                        slideToClickedSlide
                        centeredSlides
                        slidesPerView={"auto"}
                        onActiveIndexChange={(swiper: ISwiper.Swiper) => activeIndexChange(swiper)}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 283,
                            depth: 0,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        autoHeight
                        modules={[EffectCoverflow]}
                        className={styles.swiper}
                        wrapperClass={styles.swiperWrapper}>
                        {FEATURES_CARDS.map((feature) => (
                            <SwiperSlide className={styles.slide} key={feature.id}>
                                <FeatureItem feature={feature} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className={styles.navigationButtons}>
                        <button onClick={() => handleNavigation('back')}>
                            <img src={arrow} alt="" />
                        </button>
                        <button onClick={() => handleNavigation('next')}>
                            <img src={arrow} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
