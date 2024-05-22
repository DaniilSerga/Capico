import React, {FC, useEffect, useRef, useState} from 'react';
import {WorkSectionCard} from 'components/WorkSectionCard';
import {WORK_CARDS} from 'constants/index';
import arrowLeftShort from 'assets/icons/arrowLeftShort.svg';
import arrowRightLong from 'assets/icons/arrowRightLong.svg'
import styles from './SliderHorizontal.module.scss';

const SliderHorizontal: FC = () => {
    const listRef = useRef<HTMLUListElement | null>(null);
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [completness, setCompletness] = useState(0);
    
    const getCompletnessPercentage = () => {
        const smth = window.innerWidth + (listRef.current!.scrollLeft - listRef.current?.scrollWidth!);
        console.log(smth);
        return 100 - (Math.abs(smth) / window.innerWidth * 100);
    }

    const handleScroll = () => {
        const scrollPercentage = Math.round(getCompletnessPercentage());
        setCompletness(scrollPercentage);
    };

    const handleScrollTo = (type: 'next' | 'prev') => {
        const gap = Number(window.getComputedStyle(listRef.current!).gap.slice(0, -2));
        const cardWidth = cardRef.current!.offsetWidth;
        const scrollLeft = listRef.current!.scrollLeft;
        
        const scrollAmount = type === 'next' ? 
            scrollLeft + cardWidth + gap : 
            scrollLeft - cardWidth - gap;

        console.log(scrollAmount);
        listRef.current!.scrollTo({left: scrollAmount, behavior: 'smooth'});
    };

    useEffect(() => {
        const scrollPercentage = Math.round(getCompletnessPercentage());
        setCompletness(scrollPercentage);
    }, []);

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.navigationButtonsContainer}>
                <button className={styles.prevButton} onClick={() => handleScrollTo('prev')}>
                    <img src={arrowLeftShort} alt="" />
                </button>
                <button className={styles.nextButton} onClick={() => handleScrollTo('next')}>
                    <img src={arrowRightLong} alt="" />
                </button>
            </div>

            <div className={styles.sliderWrapper}>
                <ul onScrollCapture={handleScroll} className={styles.slider} ref={listRef} onScroll={handleScroll}>
                    {WORK_CARDS.map((card) => {
                        return (
                            <WorkSectionCard ref={cardRef} item={card} key={card.id} />
                        )
                    })}
                </ul>
                <div className={styles.progressBarContainer}>
                    <div style={{width: `${completness}%`}} className={styles.progressBar}></div>
                </div>
            </div>
        </div>
    );
};

export default SliderHorizontal;
