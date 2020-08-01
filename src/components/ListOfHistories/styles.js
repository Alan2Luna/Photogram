import styled, { css } from 'styled-components';
import { entryIn } from '../../styles/animation.js'

export const List = styled.ul`
    display: flex;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    ${props => props.fixed && css`
    {
        border-radius: 50px;
        background-color: #fff;
        position: fixed;
        top: -18px;
        right: 0;
        left: 0;
        max-width: 350px;
        margin: 0 auto;
        padding: 5px;
        transform: scale(.6);
        z-index: 1;
        ${entryIn({ time: '1s' })}
    }
    `}
`

export const Item = styled.li`
    padding: 5px;
`