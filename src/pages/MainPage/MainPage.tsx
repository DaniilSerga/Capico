import React, {FC} from 'react';
import { 
    BenefitsSection, 
    ComfortableWorkSection, 
    FeaturesSection, 
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
            <FeaturesSection />
        </>
    );
};

export default MainPage;
