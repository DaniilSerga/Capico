import React, {FC} from 'react';
import { Props } from './type';

import styles from './WorkSectionCard.module.scss';

const WorkSectionCard = React.forwardRef<HTMLDivElement, Props>(({item}, ref) => {
    return (
        <div ref={ref} className={styles.cardContainer}>
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
