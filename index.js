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

function SellingPoints(sellingPoints){
    let i = 0;
    let list = '<ul>';
            
    while(i < sellingPoints.length){
        list += `
                    <li>
                        ${sellingPoints[i]}
                    </li>
                `;
        
        i++;
    }
            
    return `${list}</ul>`;
}

function Book(book){
    return `
        <div> 
            <h1>${book.name}</h1>
            <h3>${book.author}</h3>
            <p> Price:$${book.price}</p>
            <img src="${book.pictureUrl}">
            ${SellingPoints(book.sellingPoints)}
        </div>
    `;
}

document.querySelector('#content').innerHTML = Book(books[0]);


document
    .getElementById('navigation')
    .addEventListener('click',(event) => event.preventDefault());
