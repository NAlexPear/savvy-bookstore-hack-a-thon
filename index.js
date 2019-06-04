const State = {
    'active': 'books'
};

const products = {
    'books': [
        {
            'id': 1,
            'title': 'Lasagna: A Retrospective',
            'creator': 'Garfield',
            'image': 'http://graphics8.nytimes.com/images/2015/10/15/dining/15RECIPE20DIN/15RECIPE20DIN-articleLarge.jpg',
            'price': 24,
            'selling_points': [
                'Lasagna is delicious.',
                'The essential guide to Italian casseroles of all types.',
                "Real G's move silent, like Lasagna. -Lil Wayne"
            ]
        },
        {
            'id': 2,
            'title': 'Cryptonomicon',
            'creator': 'Neal Stephenson',
            'image': 'https://images-na.ssl-images-amazon.com/images/I/41K%2Bt2TSopL._SX304_BO1,204,203,200_.jpg',
            'price': 200,
            'selling_points': [
                'Something something bitcoin',
                'I like this -Elon Musk',
            ]
        }
    ],
    'albums': []
};

const content = document.querySelector('#content');

function Product(product){
    return `
        <div>
            <span class="fas fa-trash"></span>
            <h1>${product.title}</h1>
            <h3>${product.creator}</h3>
            <p>Price:$${product.price}</p>
            <img src="${product.image}">
            <ul>
                ${product.selling_points.map((sellingPoint) => `<li>${sellingPoint}</li>`).join('')}
            </ul>
        </div>
    `;
}

function render(state){
    content.innerHTML = products[state.active].map(Product).join('');

    document
        .getElementById('navigation')
        .addEventListener('click', (event) => {
            event.preventDefault();

            console.log(event.target.id);

            state.active = event.target.id;
            render(state);
        });
}

render(State);

fetch('https://api.savvycoders.com/albums')
    .then((response) => response.json())
    .then((data) => {
        data.forEach((album) => products.albums.push(album));

        if(State.active === 'albums'){
            render(State);
        }
    });


fetch('https://api.savvycoders.com/books')
    .then((response) => response.json())
    .then((data) => {
        data.forEach((book) => products.books.push(book));

        if(State.active === 'books'){
            render(State);
        }
    });
