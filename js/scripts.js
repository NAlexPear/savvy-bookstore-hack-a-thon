var books = [
    {
        "id": 1,
        "name": "How Not to Scare Kids",
        "author": "Iceberg Slim",
        "pictureUrl": "http://cdn3.momsxyz.com/2015/04/image001.jpg",
        "price": 10,
        "sellingPoints": [
            "Hiding In The closet.",
            "Never Ask a 2yr old for tissue.",
            "Be A Friend Before A Parent." ]
    },
    {
        "id": 2,
        "name": "Apples to Oranges",
        "author": "Farmer Fred",
        "pictureUrl": "http://strongautomotive.com/wp-content/uploads/2014/11/Apple-Orange-2.jpg",
        "price": 8,
        "sellingPoints": [
            "Home Grown Food.",
            "Processed Food.",
            "Chitterlings vs. Veggies." ]
    },
    {
        "id": 3,
        "name": "Queens and Kings",
        "author": "Shaka Zulu",
        "pictureUrl": "https://i.pinimg.com/originals/a6/f6/f8/a6f6f872fc9ba5cd80d37971b15e7a1c.jpg",
        "price": 115,
        "sellingPoints": [
            "Killing a Tiger With a Twig.",
            "How to Rule a Nation.",
            "Wearing the Crown." ]
    }
];

var albums = [
    {
        "id": 1,
        "name": "Houses of the Holy",
        "author": "Led Zeppelin",
        "pictureUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Led_Zeppelin_-_Houses_of_the_Holy.jpg/220px-Led_Zeppelin_-_Houses_of_the_Holy.jpg",
        "price": 20,
        "sellingPoints": [
            "Over the Hills and Far Away/Dancing Days",
            "D'yer Mak'er/The Crunge",
            "Released	in 28 March 1973"
        ]
    },
    {
        "id": 2,
        "name": "Broke and Famous",
        "author": "Dormtainment",
        "pictureUrl": "https://direct.rhapsody.com/imageserver/images/Alb.69185622/500x500.jpg",
        "price": 3.99,
        "sellingPoints": [
            "@$$ On the Internet [Explicit]",
            "Ballin Ona Budget [Explicit]",
            "Elephant D-Ck (Bonus Track) [Explicit]"
        ]
    },
    {
        "id": 3,
        "name": "Hippie High",
        "author": "Josie Hill",
        "pictureUrl": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/field-of-flowers-jessica-t-hamilton.jpg",
        "price": 11.99,
        "sellingPoints": [
            "Rolling in the daisies",
            "High on life",
            "Pass it, my friend"
        ]
    }
];

function createProductCard( product ){
    var openingTag = "<div>";
    var bookTitleVariable = "<div class='title'><header><h1>" + product.name + "</h1></header></div>";
    var bookAuthorVariable = "<div class='author'><h2>" + product.author + "</h2></div>";
    var bookImageVariable = "<div class='image'><img src='" + product.pictureUrl + "' alt=''></div>";
    var bookPrice = "<ul class='price'><li>Price: $" + product.price + ".00</li></ul>";
    var bookSellingPoints = "<div class='sellingPoints'><ul>";

    for( let i = 0; i < product.sellingPoints.length ; i++ ){
        bookSellingPoints += "<li>" + product.sellingPoints[i] + "</li>" ;
    }

    bookSellingPoints += "</ul>" + "</div>";

    return openingTag + bookTitleVariable + bookAuthorVariable + bookImageVariable + bookPrice + bookSellingPoints + "</div>";
}

document.querySelector( "#content" ).innerHTML += albums.map( createProductCard ).join( "" ) + books.map( createProductCard ).join( "" );
