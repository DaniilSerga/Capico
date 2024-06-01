import React, {FC} from 'react';
import styles from './NotFoundPage.module.scss';
import arrow from 'assets/icons/arrowRightLong.svg';
import arrowColor from 'assets/icons/arrowRightPurple.svg';

const NotFoundPage: FC = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.contentContainer}>
                <h2>Page not found</h2>
                <p>Join to our partners, read author's analytics,<br />explore the world of trading</p>
                <button className={styles.createAccountButton}>
                    Create an account
                    <div className={styles.buttonIconWrapper}>
                        <img src={arrow} alt="" />
                    </div>
                </button>
            </div>
        </section>
    );
};

export default NotFoundPage;
