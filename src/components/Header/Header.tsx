import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Link to="/not-found"></Link>
            <Link to="/pricing">prices</Link>
            <Link to="/partners">partners</Link>
            <Link to="/not-found">knowledge base</Link>
            <Link  to="/not-found">academy</Link>
            
            {/* Sign in */}
            <Link to="/sign-in">Sign in</Link>
        </header>
    );
};

export default Header;
