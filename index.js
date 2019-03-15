import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';

var State = {
    'albums': [ {
        'title': 'SLABASF',
        'creator': 'Kevin Townson feat Justin Lautz',
        'image': 'http://images6.fanpop.com/image/photos/34400000/Stairway-To-Heaven-classic-r-and-b-music-34425776-400-344.jpg',
        'price': 99.99,
        'selling_points': [
            'Always Strive Forever',
            'Fire straight up fire',
            'Global Domination'
        ] },

    {
        'title': 'Code of conduct',
        'creator': 'cody and the cat',
        'image': 'https://cdn.makeawebsitehub.com/wp-content/uploads/2016/02/learn-code-e1455713167295.jpg',
        'price': 69.99,
        'selling_points': [
            'tough fellas always smell like cheese',
            'super secure minecraft passwords',
            'the snack locusts have been poisoned by the deadly figs'
        ] } ],

    'books': [ {
        'title': 'Lonely Turbo guy',
        'creator': 'Stock Boo5t',
        'image': 'https://cdn.shopify.com/s/files/1/1032/7025/products/turbo_lunch_napkin_1_2048x2048.jpg?v=1472354438',
        'price': 3.50,
        'selling_points': [
            'Turbo lag always effects evan.',
            'I live my life 1 spool at a time.',
            'farfignugen -Kevin Gates'
        ]
    },
    {
        'title': 'Alex The Swaglord',
        'creator': 'I dunno that guy ->',
        'image': 'https://i.kym-cdn.com/photos/images/newsfeed/001/399/667/664.jpg',
        'price': 4.00 ,
        'selling_points': [
            'It has a picture of our overlord in it. We must listen and be obedient for we are peasants and he is god',
            'Bruh its 4 dollars',
            'For the loud keyboard peasants'
        ]
    },
    {
        'title': 'Hell Hath No Furry',
        'creator': 'Seath',
        'image': 'https://cdn.weasyl.com/~sketh/submissions/893599/3476bbeea39cadd6a47938cd04eb86da97b70cd4834bc2536cf398b94d3f6974/sketh-sketh-the-angry-furry.jpg',
        'price': 39.99,
        'selling_points': [
            'Cosplay',
            'Im not weird, youre weird',
        ]
    },
    {
        'title': 'Brad the server dad',
        'creator': 'Brad the amateur server dad',
        'image': 'https://i.ytimg.com/vi/KzjDO3bJjzk/maxresdefault.jpg',
        'price': 99.99,
        'selling_points': [
            '9+ hours a day of minecraft.',
            'My grandma loves my pet rock',
            'Im on farmers only.com-brad'
        ]
    }
    ]
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
        
        var title = document.querySelector('#title').value;

        console.log(title);
        var author = document.querySelector('#author').value;

        console.log(author);
        var pic = document.querySelector('#pic').value;

        console.log(pic);
        var price = document.querySelector('#price').value;

        console.log(price);
        var sp = document.querySelector('#sellingPoints').value;

        console.log(sp);

        render(State);
    });
}

render(State);
