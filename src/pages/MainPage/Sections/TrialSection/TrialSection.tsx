import React, {FC} from 'react';
import arrow from 'assets/icons/arrowRightLong.svg';
import arrowColor from 'assets/icons/arrowRightPurple.svg';

import styles from './TrialSection.module.scss';

const TrialSection: FC = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionHeading}>
                <h5>Free use per month</h5>
            </div>

            <div className={styles.contentContainer}>
                <h2>Try Capico for free<br />per month</h2>

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

export default TrialSection;
