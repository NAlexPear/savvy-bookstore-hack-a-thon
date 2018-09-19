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

    document
        .querySelectorAll('span.delete a')
        .forEach((deleteLink) => {
            deleteLink.addEventListener('click', (event) => {   // Replace navigation with this eventlistener
                event.preventDefault();                         // And prevent default behavior

                Axios
                    .delete(`https://api.savvycoders.com/books/${deleteLink.id}`) // Delete it from the API
                    .then(
                        () => render(books.filter((book) => book.id != deleteLink.id))
                    );
            });
        });

    document.querySelector('.nav-books a').addEventListener('click', (event) => { // When we click the books link
        event.preventDefault();                                          // Prevent default behavior
        render(items.filter((item) => item.type == 'book'));             // Filter only books
    });

    document.querySelector('.nav-music a').addEventListener('click', (event) => { // Likewise for music
        event.preventDefault();
        render(items.filter((item) => item.type == 'music'));
    });
}

Axios
    .get('https://api.savvycoders.com/books')
    .then((booksResponse) => {
        var books = booksResponse.data;

        Axios
            .get('https://api.savvycoders.com/albums')
            .then((albumsResponse) => {
                var albums = albumsResponse.data;
                var products = books.concat(albums);

                render(products);
            });
    });
