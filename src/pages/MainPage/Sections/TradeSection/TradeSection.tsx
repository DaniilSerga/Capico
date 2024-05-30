import React, {FC} from 'react';
import arrow from 'assets/icons/arrowRightLong.svg';
import arrowColor from 'assets/icons/arrowRightPurple.svg';

import styles from './TradeSection.module.scss';

const TradeSection: FC = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionHeading}>
                <div className={styles.headingBorder}></div>
                <h5>All functionality is always at hand.</h5>
            </div>

            <div className={styles.contentContainer}>
                <h2>Trade anywhere</h2>
                <p>The service is fully adapted to work through a browser on your smartphone or tablet.</p>
                <button className={styles.createAccountButton}>
                    Create an account
                    <div className={styles.buttonIconWrapper}>
                        <img src={arrow} alt="" />
                        <img src={arrowColor} alt="" />
                    </div>
                </button>
            </div>
        </section>
    );
};

export default TradeSection;
