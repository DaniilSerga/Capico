import React, {FC} from 'react';
import keyIcon from 'assets/icons/securityIcons/keyIcon.svg';
import shieldIcon from 'assets/icons/securityIcons/shieldIcon.svg';
import lockIcon from 'assets/icons/securityIcons/lockIcon.svg';

import styles from './SecuritySection.module.scss';

const SecuritySection: FC = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionHeading}>
                <div className={styles.headingBorder}></div>
                <div className={styles.headingContent}>
                    <h2>high security<br />platform</h2>
                    <p>API, 2FA and Technology</p>
                </div>
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.card}>
                    <div>
                        <h5>API Keys</h5>
                        <img src={keyIcon} alt="" />
                    </div>
                    <p>Trading takes place through API keys of exchanges with the inability to withdraw funds.</p>
                </div>

                <div className={styles.card}>
                    <div>
                        <h5>Server</h5>
                        <img src={shieldIcon} alt="" />
                    </div>
                    <p>User data is encrypted and stored on an isolated server.</p>
                </div>

                <div className={styles.card}>
                    <div>
                        <h5>2FA</h5>
                        <img src={lockIcon} alt="" />
                    </div>
                    <p>Checking new devices and IP addresses, as well  two-factor authentication allow you to securely protect your account from unauthorized access.</p>
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;
