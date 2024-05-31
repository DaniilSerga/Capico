import React, {FC} from 'react';
import logo from 'assets/icons/logo.svg';
import twitterIcon from 'assets/icons/footerContacts/twitterLogo.svg';
import facebookIcon from 'assets/icons/footerContacts/facebookLogo.svg';
import youtubeIcon from 'assets/icons/footerContacts/youtubeLogo.svg';
import telegramIcon from 'assets/icons/footerContacts/telegramLogo.svg';
import telegramIconColor from 'assets/icons/footerContacts/telegramLogoColor.svg';
import vkIcon from 'assets/icons/footerContacts/vkLogo.svg';

import styles from './Footer.module.scss';

const Footer: FC = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="" />

                <p>© 2022 Capico ltd.</p>
            </div>

            <div className={styles.networksListContainer}>
                <h6>We are in social<br />networks</h6>

                <ul className={styles.networksList}>
                    <li>
                        <a href="/">
                            <img src={twitterIcon} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={facebookIcon} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={youtubeIcon} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={telegramIcon} alt="" />
                            <p>chat</p>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={telegramIconColor} alt="" />
                            <p>channel</p>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={vkIcon} alt="" />
                        </a>
                    </li>
                </ul>

                <a href="mailto:info@capico.app">info@capico.app</a>
            </div>

            <div className={styles.documentsContainer}>
                <h6 className={styles.blockHeading}>Documents</h6>

                <ul className={styles.textList}>
                    <li>
                        <a href="/">Terms of use</a>
                    </li>
                    <li>
                        <a href="/">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/">Referral Agreement</a>
                    </li>
                </ul>
            </div>

            <div className={styles.platformContainer}>
                <h6 className={styles.blockHeading}>Platform</h6>

                <ul className={styles.textList}>
                    <li>
                        <a href="/">Functions</a>
                    </li>
                    <li>
                        <a href="/">Tariffs</a>
                    </li>
                    <li>
                        <a href="/">Partners</a>
                    </li>
                    <li>
                        <a href="/">Academy</a>
                    </li>
                    <li>
                        <a href="/">Knowledge base</a>
                    </li>
                    <li>
                        <a href="/">Popular questions</a>
                    </li>
                    <li>
                        <a href="/">Jobs</a>
                    </li>
                </ul>
            </div>

            <div className={styles.authBlock}>
                <a href="/">Sign in</a>
                <a href="/">Create an account</a>
            </div>
        </footer>
    );
};

export default Footer;
