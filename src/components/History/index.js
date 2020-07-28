import React from 'react';

import { Img } from './styles';

export const History = ({ cover, name }) => (
    <Img src={ cover } alt={ name } />
)