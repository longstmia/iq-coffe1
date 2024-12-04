import React from 'react';
import styled from 'styled-components';

// Стилизованный компонент для Footer
const FooterContainer = styled.footer`
    position: fixed; /* Фиксируем футер внизу страницы */
    bottom: 0;
    left: 0;
    width: 100%;
    height: 88px;
    background-color: #000000; /* Цвет фона */
    border-top-left-radius: 20px; /* Закругленные углы */
    border-top-right-radius: 20px;
    display: flex;
    justify-content: center; /* Центрируем кнопки по горизонтали */
    align-items: center; /* Центрируем кнопки по вертикали */
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2); /* Тень для эффекта */
`;



const Footer = () => (
  <FooterContainer>
  </FooterContainer>
);

export default Footer;
