import React, {FC} from 'react';

import styles from './ComfortableWorkSection.module.scss';

const ComfortableWorkSection: FC = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className="heading">
                <div className={styles.headingBorder}></div>
                <h2>Everything for your comfortable work</h2>
            </div>
        </section>
    );
};

export default ComfortableWorkSection;
