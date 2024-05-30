import React, {FC} from 'react';
import { 
    BenefitsSection, 
    ComfortableWorkSection, 
    FeaturesSection, 
    HeadingSection, 
    MultiChartSection, 
    NumbersSection, 
    PartnersSection, 
    PortfolioSection, 
    SecuritySection, 
    TradeSection, 
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
            <TradeSection />
            <SecuritySection />
            <PartnersSection />
        </>
    );
};

export default MainPage;
