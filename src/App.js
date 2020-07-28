import React from 'react';

import { GlobalStyle } from './GlobalStyles';
import { ListOfHistories } from './components/ListOfHistories';

export const App = () => {
    return (
        <div>
            <GlobalStyle />
            <ListOfHistories />
        </div>
    )
}