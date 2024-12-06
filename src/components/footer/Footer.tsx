import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    position: fixed; 
    bottom: 0;
    left: 0;
    width: 100%;
    height: 88px;
    background-color: #000000; 
    border-top-left-radius: 20px; 
    border-top-right-radius: 20px;
    display: flex;
    justify-content: center; 
    align-items: center; 
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2); 
`;



const Footer = () => (
  <FooterContainer>
  </FooterContainer>
);

export default Footer;
