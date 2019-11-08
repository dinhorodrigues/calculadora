import React from 'react';
import './Button.css';

export default props =>
    <button  className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''} 
    `}> 
    {props.label}</button>/* se operation estiver definida coloca a classe operation caso contrario coloxa vazio,  usando
    o dolar por que ta usando javaScript*/