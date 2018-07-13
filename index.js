import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';

var root = document.querySelector('#root');

function render(){
    root.innerHTML = `
        ${Navigation()}
        ${Header()}
        ${Content()}
        ${Footer()}
    `;

}

render();
