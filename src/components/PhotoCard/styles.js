import styled from 'styled-components';
import { fadeIn } from '../../styles/animation.js'



export const PhotoWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
`

export const Photo = styled.img`
    width: 100%;
    object-fit: cover;
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    ${fadeIn({ time: '2s' })}
`

export const Buttom = styled.button`
    display: flex;
    align-items: center;
    margin-top: 5px;
    & svg {
        margin-right: 5px;
    }
`