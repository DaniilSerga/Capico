import React, {FC} from 'react';
import {
    BenefitsSection, 
    HeadingSection, 
    MultiChartSection, 
    NumbersSection, 
    PortfolioSection, 
    VideoSection
} from './Sections';

const MainPage: FC = () => {
    return (
        <>
            <HeadingSection />
            <VideoSection />
            <NumbersSection />
            <BenefitsSection />
            <MultiChartSection />
            <PortfolioSection />
        </>
    );
};

export default MainPage;
