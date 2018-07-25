import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import Form from './src/Form';

var books = [
    {
        'id': 1,
        'name': 'Little Monsters',
        'author': 'Kara Thomas',
        'pictureUrl': 'https://images-na.ssl-images-amazon.com/images/I/517wZWFjCFL._SX331_BO1,204,203,200_.jpg',
        'price': 30,
        'sellingPoints': [
            'Unexpected Plot twists',
        ]
    },
    {
        'id': 2,
        'name': 'The Go-Giver',
        'author': 'Bob Burg and John David Mann',
        'pictureUrl': 'https://m.media-amazon.com/images/I/51V8p5d7rVL._SL500_.jpg',
        'price': 13.29,
        'sellingPoints': [
            'A Little Story About a Powerful Business Idea'
        ]
    },
    {
        'id': 3,
        'name': 'Hitchhikers Guide to the Galaxy',
        'author': 'Douglas Adams',
        'pictureUrl': 'https://images.penguinrandomhouse.com/cover/9781400052929',
        'price': 42,
        'sellingPoints': [
            "DON'T PANIC",
            'You can wave your towel in emergencies as a distress signal',
            'Sadly, there are no Lil Wayne quotes about this book'
        ]
    }
];


var root = document.querySelector('#root');

function render(){
    console.log(books)
    root.innerHTML = `
        ${Navigation()}
        ${Header()}
        ${Content(books)}
        ${Form()}
        ${Footer()}
    `;
}

render();
