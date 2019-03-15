import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import axios from 'axios';


var State = {
    'books': [],
    'albums': [
        {
            'title': 'SLABASF',
            'creator': 'Kevin Townson feat Justin Lautz',
            'image': 'http://images6.fanpop.com/image/photos/34400000/Stairway-To-Heaven-classic-r-and-b-music-34425776-400-344.jpg',
            'price': 99.99,
            'selling_points': [
                'Always Strive Forever',
                'Fire straight up fire',
                'Global Domination'
            ]
        },
        {
            'title': 'Code of conduct',
            'creator': 'cody and the cat',
            'image': 'https://cdn.makeawebsitehub.com/wp-content/uploads/2016/02/learn-code-e1455713167295.jpg',
            'price': 69.99,
            'selling_points': [
                'tough fellas always smell like cheese',
                'super secure minecraft passwords',
                'the snack locusts have been poisoned by the deadly figs'
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
        
        render(State);
    });
}

axios
    .get('https://api.savvycoders.com/Books')
    .then((response) => {
        State.products = response.data;
        render(State);
    });
