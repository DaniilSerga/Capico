import React, {FC} from 'react';

import styles from './VideoSection.module.scss';

const VideoSection: FC = () => {
    return (
        <section className={styles.anotherSection}>
            <h2>Manage positions on<br />different exchanges from one<br />window</h2>
        </section>
    );
};

export default VideoSection;
