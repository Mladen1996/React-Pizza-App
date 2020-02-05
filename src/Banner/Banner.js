import React from 'react';
import styled from 'styled-components';
import banner from '../img/banner.jpg';

export const BannerStyle= styled.div`
    height:250px;
    background:url(${banner});
    background-position:center;
    background-size:cover;
    filter:constrast(75%);
`;

export default function Banner(){
    return <BannerStyle>
    </BannerStyle>
}