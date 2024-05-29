import React, {FC} from 'react';
import { Props } from './type';

import styles from './WorkSectionCard.module.scss';

const WorkSectionCard:FC<Props> = (({item}) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardHeading}>
                <h5>{item.title}</h5>

                <div className={styles.iconContainer}>
                    <img src={item.icon} alt="" />
                </div>
            </div>

            <p>{item.description}</p>
        </div>
    );
});

export default WorkSectionCard;
