import React, {FC} from 'react';
import { Props } from './type';
import arrow from 'assets/icons/arrowRightLong.svg';
import styles from './FeatureItem.module.scss';

const FeatureItem: FC<Props> = ({feature}) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.iconWrapper}>
                <img src={feature.icon} alt="" />
            </div>

            <div className={styles.contentWrapper}>
                <h5 className={styles.title}>{feature.title}</h5>

                <p className={styles.description}>{feature.description}</p>

                <button className={styles.learnMore}>
                    Learn more
                    <img src={arrow} alt="" />
                </button>
            </div>
        </div>
    );
};

export default FeatureItem;
