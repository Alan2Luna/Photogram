import React from 'react';

import { List, Item } from './styles';
import { History } from '../History';

import { histories } from '../../../db.json';

export const ListOfHistories = () => {
    return (
        <List>
            {
                histories.map(history =>
                    <Item key={ history.id }>
                        <History { ...history }/> 
                    </Item>
                )
            }
        </List>
    )
}