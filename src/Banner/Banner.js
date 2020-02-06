import React from 'react';
import styled from 'styled-components';
import banner from './banner.jpg';

export const BannerStyle= styled.div`
    height:250px;
    background:url(${banner});
    background-position:center;
    background-size:cover;
    filter:contrast(75%);
`;

export default function Banner(){
    return <BannerStyle>
    </BannerStyle>
}