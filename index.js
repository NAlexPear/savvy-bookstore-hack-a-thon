import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import axios from 'axios';


var State = {
    'books': [],
    'albums': []
};


var root = document.querySelector('#root');


function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
    `;

    document.querySelectorAll('#navigation a').forEach((link) => link.addEventListener('click', (event) => {
        event.preventDefault();
    }));


    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
  
        console.log(Array.from(event.target.elements).map((element) => ({ 'name': element.name, 'value': element.value })));

        
        render(State);
    });
}

axios
    .get('https://api.savvycoders.com/books')
    .then((response) => {
        State.books = response.data;
        render(State);
    });

axios
    .get('https://api.savvycoders.com/albums')
    .then((response) => {
        State.albums = response.data;
        render(State);
    });
