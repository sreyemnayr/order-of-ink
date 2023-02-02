import React from 'react'
import Header from '../navigation/Header'
import styled from 'styled-components'
import Footer from '../navigation/Footer'

const Body = styled.div `
    position: absolute;
    width: 1920px;
    height: 6094px;
`;

function PageLayout({ children }) {
    return (
    <Body>
            <Header />
            <main>{children}</main>
            <Footer /> 
    </Body>
    );
};
export default PageLayout;