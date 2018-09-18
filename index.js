import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Axios from 'axios';

var items;

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

    document.querySelectorAll('span.delete a').forEach((deleteLink) => { // For each delete link in a book div
        deleteLink.addEventListener('click', (event) => {   // Replace navigation with this eventlistener
            event.preventDefault();                         // And prevent default behavior
            Axios.delete(`https://api.savvycoders.com/books/${deleteLink.id}`) // Delete it from the API
                .then(() => render(books.filter((book) => book.id != deleteLink.id))); // Re-render the page without it
        });
    });

    document.querySelector('.nav-books a').addEventListener('click', (event) => { // When we click the books link
        event.preventDefault();                                          // Prevent default behavior
        render(items.filter((item) => item.type == 'book'));             // Filter only books
    });

    document.querySelector('.nav-movies a').addEventListener('click', (event) => { // Likewise for movies
        event.preventDefault();
        render(items.filter((item) => item.type == 'movie'));
    });
}

Axios
    .get('https://api.savvycoders.com/books')
    .then((response) => {
        items = response.data;
        render(response.data);
    });

Axios.post('https://api.savvycoders.com/books', {
    'id': 47,
    'creator': 'Alfred Garfield Hitchcock',
    'image': 'https://images-na.ssl-images-amazon.com/images/I/51YUYsBp2CL._SX322_BO1,204,203,200_.jpg',
    'price': 17.69,
    'selling_points': [ 'Lasagna is delicious.','The essential guide to Italian casseroles of all types.', 'Real G\'s move silent, like Lasagna. -Lil Wayne' ],
    'title': '50 Shade of Gray (the movie)',
    'type': 'movie'
});