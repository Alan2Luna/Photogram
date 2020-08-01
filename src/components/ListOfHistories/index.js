import React, { Fragment, useState, useEffect } from 'react';

import { List, Item } from './styles';
import { History } from '../History';

import { histories } from '../../../db.json';

export const ListOfHistories = () => {
    const [showFixed, setShowFixed] = useState(false);

    useEffect(() => {
        const onScroll = (e) => {
            const newShowFixed = window.scrollY > 145;
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }

        document.addEventListener('scroll', onScroll)

        return () => { document.removeEventListener('scroll', onScroll) }
    }, [showFixed])

    const renderList = (fixed) => (
        <List fixed={fixed}>
            {
                histories.map(history =>
                    <Item key={ history.id }>
                        <History { ...history }/> 
                    </Item>
                )
            }
        </List>
    )

    return (
        <Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    )
}