import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/icons/logo.svg';
import arrowRight from 'assets/icons/arrowRight.svg';
import styles from './Header.module.scss';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logoContainer}>
                <img src={logo} alt="logo" />
            </Link>

            <div className={styles.links}>
                <Link to="/">features</Link>
                <Link to="/pricing">prices</Link>
                <Link to="/partners">partners</Link>
                <Link to="/not-found">knowledge base</Link>
                <Link  to="/not-found">academy</Link>
                
                {/* Sign in */}
                <Link to="/sign-in" className={styles.signIn}>
                    sign in
                    <img src={arrowRight} alt=""/>
                </Link>
            </div>
        </header>
    );
};

export default Header;
