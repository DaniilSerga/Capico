import React, {FC} from 'react';
import {BenefitsSection, HeadingSection, MultiChartSection, NumbersSection, VideoSection} from './Sections';

const MainPage: FC = () => {
    return (
        <>
            <HeadingSection />
            <VideoSection />
            <NumbersSection />
            <BenefitsSection />
            <MultiChartSection />
        </>
    );
};

export default MainPage;
