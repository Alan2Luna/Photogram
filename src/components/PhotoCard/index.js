import React from 'react';

import { MdFavoriteBorder } from "react-icons/md";
import { PhotoWrapper, Photo, Buttom } from './styles';

const PHOTO = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ src = PHOTO, likes = 0 }) => {
    return (
        <article>
            <PhotoWrapper>
                <Photo src={ src } alt=""/>
            </PhotoWrapper>
            <Buttom>
                <MdFavoriteBorder size={32} />{ likes } likes
            </Buttom>
        </article>
    )
}