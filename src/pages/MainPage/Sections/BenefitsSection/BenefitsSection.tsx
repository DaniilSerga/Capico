import React, {FC} from 'react';

import styles from './BenefitsSection.module.scss';

const BenefitsSection: FC = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.heading}>
                <h2>benefits</h2>
                <h2>Manage positions on</h2>
            </div>

            <div className={styles.contentContainer}>
                <div>
                    <h3>Interface<br />Builder</h3>
                    <div className={styles.descriptionContainer}>
                        <h4>Customize<br />your look</h4>
                        <p>Remove the excess, add what you need.<br />Trade at your convenience.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
