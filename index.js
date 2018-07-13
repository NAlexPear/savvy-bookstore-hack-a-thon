
import Navigation from './src/navigation';
import Header from './src/header';
import Content from './src/content';
import Footer from './src/footer';

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
