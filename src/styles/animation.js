import { css, keyframes } from 'styled-components';


const fadeInKeyframes = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }

    to {
        filter: blur(0);
        opacity: 1;
    }
`

const entryInKeyframes = keyframes`
    from {
        top: -70px;
    }
    to {
        top: -18px
    }
`


export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
    css`animation: ${time} ${fadeInKeyframes} ${type};`

export const entryIn = ({ time = '1s', type = 'ease' } = {}) => css`animation: ${entryInKeyframes} ${time} ${type};`
