import React, {FC} from 'react';
import {SliderHorizontal} from 'components';

import styles from './ComfortableWorkSection.module.scss';

const ComfortableWorkSection: FC = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.heading}>
                <div className={styles.headingBorder}></div>
                <h2>Everything for your<br />comfortable work</h2>
            </div>

            <SliderHorizontal />
        </section>
    );
};

export default ComfortableWorkSection;
