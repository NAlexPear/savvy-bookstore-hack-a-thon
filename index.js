import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import axios from 'axios';


var State = {
    'books': []
};


var root = document.querySelector('#root');


function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
    `;
    
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        
        render(State);
    });
}

axios
    .get('https://api.savvycoders.com/books')
    .then((response) => {
        State.books = response.data;
        render(State);
    });
