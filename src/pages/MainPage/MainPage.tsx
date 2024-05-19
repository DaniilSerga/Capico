import React, {FC} from 'react';
import {
    BenefitsSection, 
    ComfortableWorkSection, 
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
            <ComfortableWorkSection />
        </>
    );
};

export default MainPage;
