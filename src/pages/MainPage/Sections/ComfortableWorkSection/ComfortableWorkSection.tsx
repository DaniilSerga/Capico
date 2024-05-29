import React, {FC, useRef, useState} from 'react';
import {WorkSectionCard} from 'components';
import {WORK_CARDS} from 'constants/';
import arrowBack from 'assets/icons/arrowLeftShort.svg';
import arrowNext from 'assets/icons/arrowRightLong.svg';
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import styles from './ComfortableWorkSection.module.scss';

const ComfortableWorkSection: FC = () => {
    const swiperRef = useRef<SwiperRef>(null)
    const [completness, setCompletness] = useState(0);

    const handleIndexChange = (smth: any) => {
        setCompletness(smth.progress * 100);
    };

    const hadndleNavigation = (type: 'next' | 'back') => {
        if (type === 'next') {
            swiperRef.current?.swiper.slideNext();
        } else {
            swiperRef.current?.swiper.slidePrev();
        }
    };

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.heading}>
                <div className={styles.headingBorder}></div>
                <h2>Everything for your<br />comfortable work</h2>
            </div>

            <div className={styles.navigationContainer}>
                <button className={styles.prevButton} onClick={() => hadndleNavigation('back')}>
                    <img src={arrowBack} alt="" />
                </button>
                <button className={styles.nextButton} onClick={() => hadndleNavigation('next')}>
                    <img src={arrowNext} alt="" />
                </button>
            </div>

            <Swiper
                ref={swiperRef}
                slidesPerView={4}
                spaceBetween={30}
                onActiveIndexChange={handleIndexChange}
                className={styles.slider}
                breakpoints={{
                    1600: {
                        slidesPerView: 3,
                    },
                    834: {
                        slidesPerView: 2,
                    },
                    375: {
                        slidesPerView: 1
                    }
                }}>
                {WORK_CARDS.map((card) => (
                    <SwiperSlide key={card.id}>
                        <WorkSectionCard item={card} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.progressBarContainer}>
                <div style={{width: `${completness}%`}} className={styles.progressBar}></div>
            </div>
        </section>
    );
};

export default ComfortableWorkSection;
