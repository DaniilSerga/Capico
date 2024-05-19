import React, {FC} from 'react';

import styles from './PortfolioSection.module.scss';

const PortfolioSection: FC = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.heading}>
                    <div className={styles.headingBorder}></div>
                    <h2>Portfolio &<br />Statistics</h2>
                </div>

                <div className={styles.descriptionContainer}>
                    <p>Your assets on all<br />connected<br />exchanges are<br />collected in one place</p>
                    <p>Visual statistics of trade.<br />Uploading reports</p>
                </div>
            </div>

            <div className={styles.overlay}></div>
        </section>
    );
};

export default PortfolioSection;
