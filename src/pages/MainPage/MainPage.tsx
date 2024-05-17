import React, {FC} from 'react';
import styles from './MainPage.module.scss';
import {HeadingSection, VideoSection} from './Sections';

const MainPage: FC = () => {
    return (
        <>
            <HeadingSection />
            <VideoSection />
        </>
    );
};

export default MainPage;
