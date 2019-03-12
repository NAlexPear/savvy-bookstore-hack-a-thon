import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';


var book1 = {
    'id': 1,
    'name': 'Lonely Turbo guy',
    'author': 'Stock Boo5t',
    'pictureUrl': 'https://cdn.shopify.com/s/files/1/1032/7025/products/turbo_lunch_napkin_1_2048x2048.jpg?v=1472354438',
    'price': 3.50,
    'sellingPoints': [
        'Turbo lag always effects evan.',
        'I live my life 1 spool at a time.',
        'farfignugen -Kevin Gates'
    ]
};

var book2 = {
    'id': 2,
    'name': 'Alex The Swaglord',
    'author': 'I dunno that guy ->',
    'pictureUrl': 'https://i.kym-cdn.com/photos/images/newsfeed/001/399/667/664.jpg',
    'price': 4 ,
    'sellingPoints': [
        'It has a picture of our overlord in it. We must listen and be obedient for we are peasants and he is god',
        'Bruh its 4 dollars',
        'For the loud keyboard peasants'
    ]
};

var book3 = {
    'id': 3,
    'name': 'Hell Hath No Furry',
    'author': 'Seath',
    'pictureUrl': 'https://cdn.weasyl.com/~sketh/submissions/893599/3476bbeea39cadd6a47938cd04eb86da97b70cd4834bc2536cf398b94d3f6974/sketh-sketh-the-angry-furry.jpg',
    'price': 39.99,
    'sellingPoints': [
        'Cosplay',
        'Im not weird, youre weird',
    ]
};

var book4 = {
    'id': 4,
    'name': 'Brad the server dad',
    'author': 'Brad the amateur server dad',
    'pictureUrl': 'https://i.ytimg.com/vi/KzjDO3bJjzk/maxresdefault.jpg',
    'price': 99.99,
    'sellingPoints': [
        '9+ hours a day of minecraft.',
        'My grandma loves my pet rock',
        'Im on farmers only.com-brad'
    ]
};

var root = document.querySelector('#root');

var State = {
    'books': [ book1, book2, book3, book4 ]
};

function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
    `;
}

render(State);
