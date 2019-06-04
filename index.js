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
                'I like this -Elon Musk' ,
            ]
        }
    ],
    'albums': []
};

const content = document.querySelector('#content');

function Product(product){
    return `
        <div>
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
function Form(){
    return `
        <form>
            <label for ="title">Title</label> 
            <input type="text" name="title">
            <label for ="price">Price</label>
           <input type="text" name="price">
            <label for ="creator">Creator</label> 
            <input type="text" name="creators">
            <label for ="image">Image</label> 
            <input type="text" name="image">
            <label for ="selling_points">Selling_Points</label> 
            <input type="text" name="Selling_Points">
            <label for ="id">Id</label> 
            <input type="text" name="id">
        </form>
    `;
}
function render(state){
    content.innerHTML = products[state.active].map(Product).join('');

    document
        .getElementById('navigation')
        .addEventListener('click',(event) => {
            event.preventDefault();

            console.log(event.target.id);
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
