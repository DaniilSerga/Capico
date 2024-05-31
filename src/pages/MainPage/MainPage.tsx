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
    TrialSection, 
    VideoSection 
} from './Sections';

const MainPage: FC = () => {
    return (
        <main>
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
            <TrialSection />
        </main>
    );
};

export default MainPage;
