const products = {
    'books': [
        {
            'id': 1,
            'name': 'Lasagna: A Retrospective',
            'author': 'Garfield',
            'pictureUrl': 'http://graphics8.nytimes.com/images/2015/10/15/dining/15RECIPE20DIN/15RECIPE20DIN-articleLarge.jpg',
            'price': 24,
            'selling_points': [
                'Lasagna is delicious.',
                'The essential guide to Italian casseroles of all types.',
                "Real G's move silent, like Lasagna. -Lil Wayne"
            ]
        },
        {
            'id': 2,
            'name': 'Cryptonomicon',
            'author': 'Neal Stephenson',
            'pictureUrl': 'https://images-na.ssl-images-amazon.com/images/I/41K%2Bt2TSopL._SX304_BO1,204,203,200_.jpg',
            'price': 200,
            'selling_points': [
                'Something something bitcoin',
                'I like this -Elon Musk' ,
            ]
        }
    ],
    'albums': [
        
    ]
};

function Book(book){
    return `
        <div>
            <h1>${book.title}</h1>
            <h3>${book.creator}</h3>
            <p> Price:$${book.price}</p>
            <img src="${book.image}">
            <ul>
              ${book.selling_points.map((sellingPoint) => `<li>${sellingPoint}</li>`).join('')}
            </ul>
        </div>
    `;
}

const content = document.querySelector('#content');

content.innerHTML = products.books.map(Book).join('');

document
    .getElementById('navigation')
    .addEventListener('click',(event) => event.preventDefault());

fetch('https://api.savvycoders.com/books')
    .then((response) => response.json())
    .then((data) => content.innerHTML += data.map(Book).join(''));
