import Header from './components/Header';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Form from '/components/Form';
import Footer from './components/Footer';
const root = document.querySelector('#root');

const states = {
    header: {
        title:""
    },
    navigation: {
        links=[]
    },
    books: [
        {
        "id": 1,
        "name": "Lasagna: A Retrospective",
        "author": "Garfield",
        "pictureUrl": "http://graphics8.nytimes.com/images/2015/10/15/dining/15RECIPE20DIN/15RECIPE20DIN-articleLarge.jpg",
        "price": 24,
        "sellingPoints": [
        "Lasagna is delicious.",
        "The essential guide to Italian casseroles of all types.",
        "Real G's move silent, like Lasagna. -Lil Wayne"
     ]
    }
]
};
    
function render(state){
    root.innerHTML =`
    ${Navigation(state)},
    ${Header(state)},
    ${Content(state)},
    ${Footer(state)},
    ${Form()},
    `;
}

render(state);

