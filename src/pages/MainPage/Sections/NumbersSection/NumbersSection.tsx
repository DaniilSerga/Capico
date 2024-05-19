import React, {FC} from 'react';

import styles from './NumbersSection.module.scss';

const NumbersSection: FC = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.heading}>
                <h2>numbers</h2>
                <h2>Manage positions on</h2>
            </div>

            <div className={styles.content}>
                <div className={styles.sectionHeading}>
                    <h3>$18.5 B+</h3>
                    <h3>Total trading<br />volume</h3>
                </div>

                <div className={styles.asideInfo}>
                    <p>Actual statistic<br />on 19.07.2022</p>
                </div>

                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <p>36М+</p>
                        <p>We are online</p>
                    </div>
                    <div className={styles.card}>
                        <p>21.5 K+</p>
                        <p>Traiders in platform</p>
                    </div>
                    <div className={styles.card}>
                        <p>325 M+</p>
                        <p>Total deals in platform</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NumbersSection;
