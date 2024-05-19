import React, {FC} from 'react';

import styles from './MultiChartSection.module.scss';

const MultiChartSection: FC = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.heading}>
                <div className={styles.headingBorder}></div>
                <h2>MultiChart</h2>
            </div>

            <div className={styles.descriptionContainer}>
                <p><b>Add any trading pairs</b> from different exchanges and analyze cryptocurrency assets on one screen</p>
            </div>
        </section>
    );
};

export default MultiChartSection;
