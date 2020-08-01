import React from 'react';

import { GlobalStyle } from './styles/GlobalStyles';
import { ListOfHistories } from './components/ListOfHistories';
import { Logo } from './components/Logo';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';

export const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Logo />
            <ListOfHistories />
            <ListOfPhotoCards />
        </div>
    )
}