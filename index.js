const books = [
    {
        'id': 1,
        'name': 'Lasagna: A Retrospective',
        'author': 'Garfield',
        'pictureUrl': 'http://graphics8.nytimes.com/images/2015/10/15/dining/15RECIPE20DIN/15RECIPE20DIN-articleLarge.jpg',
        'price': 24,
        'sellingPoints': [
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
        'sellingPoints': [
            'Something something bitcoin',
            'I like this -Elon Musk' ,
        ]
    },
];
document.querySelector('#content').textContent = books[2].name
console.log(books);
