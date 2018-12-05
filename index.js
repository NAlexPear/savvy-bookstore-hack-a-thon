import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';

var root = document.querySelector('#root');

var book1 = {
    'id': 1,
    'name': 'Illusive: Friends & Adversaries (The Illusive Series Book 2) ',
    'author': 'Celeste-Marie Lyon',
    'pictureUrl': 'https://images-na.ssl-images-amazon.com/images/I/31cSwirXe3L.jpg',
    'price': 25,
    'sellingPoints': [
        'Lead singers are hot.',
        'Keep your friends close and your enemies closer.'
    ]
};

var book2 = {
    'id': 2,
    'name': "It Ain't Easy Being Cheesy:The Rise and Fall of Chester of the Cat",
    'author': 'Chester Cheetah',
    'pictureUrl': 'https://pbs.twimg.com/profile_images/989986384453644288/uoHCyP8R_400x400.jpg',
    'price': 40,
    'sellingPoints': [
        'Cheetos Fingers.',
        'Cheesy Smell From Book.',
        'Orange Fur Everywhere'
    ]
};

var book3 = {
    'id': 3,
    'name': '1822',
    'author': 'Jose',
    'pictureUrl': 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=3065282&qld=90&l=430&a=-1=1000227096',
    'price': 13,
    'sellingPoints': [
        'History of Brazil',
        'Dom Joao, Napoleon Bonaparte'
    ]
};

var book4 = {
    'id': 4,
    'name': 'Danger! A Catalog of Risks',
    'author': 'Luke Out',
    'pictureUrl': 'https://www.publicdomainpictures.net/pictures/270000/nahled/fear-portrait.jpg',
    'price': 18,
    'sellingPoints': [
        'A study in all the things we have to fear. Terrifying! I nearly jumped out of my seat. -Franklin Delano Roosevelt',
        'Why did it have to include snakes? - Indiana Jones',
        "I ain't afraid of no ghost. Cliffs, though... - Ray Parker Jr. "
    ]
};

var book5 = {
    'id': 5,
    'name': "It's New Year's Eve in New York City. Your best friend died in September, you've been robbed twice, your girlfriend is leaving you, you've lost your job...and the only one left to talk to is the gay burglar you've got tied up in the kitchen... P.S. your cat is dead.",
    'author': 'James Kirkwood',
    'pictureUrl': 'https://images-na.ssl-images-amazon.com/images/I/51p3sJk1lQL.jpg',
    'price': 3,
    'sellingPoints': [
        "With every page the situation gets crazier, zanier, more improbable, also funnier...Kirkwood's bizarre humor comes off, thanks to his ability to throw opposites together, with a stand up comic&#39;s timing. - Publishers Weekly",
        'An extraordinary novel...an ingenious, intriguing, and also moving story about two losers who become friends. It is also a revealing book about burning your bridges behind you. - Sacramento Union',
        'This novel is woven together with such artistic acumen that suspense never ebbs. The plot structure, characterization, dialog and style are virtually flawless. - Chicago Sun - Times'
    ]
};

function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
    `;
}

render(); // @fixme
