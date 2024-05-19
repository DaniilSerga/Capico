import React, {FC} from 'react';

import styles from './VideoSection.module.scss';
const video = require("assets/backgroundVideo.mp4");

const VideoSection: FC = () => {
    return (
        <section className={styles.anotherSection}>
            <h2 className={styles.heading}>Manage positions on<br />different exchanges from one<br />window</h2>
            <video src={video} controls>
                <source src={video} />
            </video>
        </section>
    );
};

export default VideoSection;
