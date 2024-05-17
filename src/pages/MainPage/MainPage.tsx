import React, {FC} from 'react';
import { BADGES } from 'constants/index';
import styles from './MainPage.module.scss';
import longArrowRight from 'assets/icons/longArrowRight.svg';

const video = require('../../assets/backgroundVideo.mp4');

const MainPage: FC = () => {
    return (
        <>
            <section className={styles.sectionContainer}>
                <video className={styles.background} autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                </video>

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
            </section>

            <section className={styles.anotherSection}>
                <h2>Manage positions on<br />different exchanges from one<br />window</h2>
            </section>
        </>
    );
};

export default MainPage;
