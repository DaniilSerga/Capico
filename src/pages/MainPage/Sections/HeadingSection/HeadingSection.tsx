import React, {FC} from 'react';
import { BADGES } from 'constants/index';
import longArrowRight from 'assets/icons/longArrowRight.svg';
import styles from './HeadingSection.module.scss';

const HeadingSection: FC = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <h1>
                        Crypto trading<br/>
                    </h1>
                    <h2>
                        with bots and<br />
                        smart seals
                    </h2>
                </div>

                <button className={styles.button}>
                    <p>Sign up now</p>
                    <img src={longArrowRight} alt="" />
                </button>


                <div className={styles.badgesContainer}>
                    <h3>Trade for free on your<br />favourite exhanges</h3>
                    <ul className={styles.badgesList}>
                        {BADGES.map((badge) => (
                            <li className={styles.badge} key={badge.id}>
                                <div className={styles.borderBlur}></div>
                                <div className={styles.badgeLogo}>
                                    <img src={(badge.logo)} alt="" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={styles.background}></div>
            <div className={styles.backgroundSecondary}></div>
        </section>
    );
};

export default HeadingSection;
