import React, {FC} from 'react';
import {PARTNERS_LIST} from 'constants/';

import styles from './PartnersSection.module.scss';

const PartnersSection: FC = () => {
    return (
        <section className={styles.sectionContainer}>
            <div>
                <div className={styles.headingBorder}></div>

                <div className={styles.headingContent}>
                    <h2>our partners</h2>
                    <p><b>The Capico platform is the official broker</b> of the leading cryptocurrency exchanges</p>
                </div>
            </div>

            <div className={styles.contentContainer}>
                <ul className={styles.partnersList}>
                    {PARTNERS_LIST.map((partner) => (
                        <li key={partner.id} className={styles.partnerItem}>
                            <div className={styles.iconWrapper}>
                                <img src={partner.icon} alt="" />
                            </div>

                            <p>{partner.label}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default PartnersSection;
