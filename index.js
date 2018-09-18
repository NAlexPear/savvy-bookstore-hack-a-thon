import axios from 'axios';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Axios from 'axios';


function render(books){
    document
        .querySelector('#root')
        .innerHTML = `
           ${Header()}
           ${Navigation()}
           ${Content(books)}
           ${Footer()}
        `;

    document
        .getElementById('bookInput')
        .addEventListener('submit', (event) => {
            event.preventDefault();
        });
}

Axios
    .get('https://api.savvycoders.com/books')
    .then((response) => {
        render(response.data);
    });
