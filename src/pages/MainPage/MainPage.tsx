import React, {FC} from 'react';
import {HeadingSection, NumbersSection, VideoSection} from './Sections';

const MainPage: FC = () => {
    return (
        <>
            <HeadingSection />
            <VideoSection />
            <NumbersSection />
        </>
    );
};

export default MainPage;
