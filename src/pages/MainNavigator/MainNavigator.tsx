import { MainPage, NotFoundPage, PartnersPage, PricingPage } from 'pages';
import React, {FC} from 'react';
import { Route, Routes } from 'react-router-dom';

const MainNavigator: FC = () => {
    return (
        <Routes>
            <Route index path='/' element={<MainPage />} />
            <Route path='pricing' element={<PricingPage />} />
            <Route path='partners' element={<PartnersPage />} />
            <Route path='not-found' element={<NotFoundPage />} />
        </Routes>
    );
};

export default MainNavigator;
