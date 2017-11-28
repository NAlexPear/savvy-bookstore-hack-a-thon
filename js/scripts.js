// Put all of your jQuery and JavaScript in this document.
/* globals $ */


var hydrateBook = function hydrateBook( bookObject ){
    $( "#book" + bookObject.id + " h1" ).text( bookObject.name );
    $( "#book" + bookObject.id + " h2" )
        .first()
        .text( bookObject.author );

    $( "#book" + bookObject.id + " img" ).attr( { "src": bookObject.pictureUrl } );
    $( "#book" + bookObject.id + " h2 > span.price" ).text( bookObject.price );

    $( "#book" + bookObject.id + " p" )
        .first()
        .text( bookObject.sellingPoints[0] );

    $( "#book" + bookObject.id + " p" )
        .first()
        .next()
        .text( bookObject.sellingPoints[1] );

    $( "#book" + bookObject.id + " p" )
        .last()
        .text( bookObject.sellingPoints[2] );
};


var book1 = {
    "id": 1,
    "name": "The Desire Map",
    "author": "Danielle LaPorte",
    "pictureUrl": "https://images-na.ssl-images-amazon.com/images/I/41BhS87QXrL._SX258_BO1,204,203,200_.jpg",
    "price": 6.32,
    "sellingPoints": [
        "Self Help",
        "Inspiration",
        "Coding"
    ]
};

var book2 = {
    "id": 2,
    "name": "Savvy Coding For Dummies",
    "author": "Alex Pearson",
    "pictureUrl": "https://images-na.ssl-images-amazon.com/images/I/51q-YHB62GL._SX258_BO1,204,203,200_.jpg",
    "price": 1799.00,
    "sellingPoints": [
        "Tech Help",
        "Web Design",
        "Coding"
    ]
};

var book3 = {
    "id": 3,
    "name": "The Monster at the End of This Book",
    "author": "Jon Stone",
    "pictureUrl": "http://smollin.com/michael/tmonstr/mon001.jpg",
    "price": 6.32,
    "sellingPoints": [
        "Timeless",
        "Interactive",
        "Coding"
    ]
};

var books = [ book1, book2, book3 ];

for( var i = 0; i < books.length; i++ ){
    hydrateBook( books[i] );
}

$( "form" ).on( "submit", ( event ) => {
    var data = $( event.target ).serializeArray();
    var formObject = {};

    event.preventDefault();

    formObject.id = books.length + 1;
    formObject.sellingPoints = [];

    data.forEach( ( field ) => {
        if( field.name === "sellingPoints" ){
            formObject.sellingPoints.push( ...field.value.split( "\n" ) );
        }
        else{
            formObject[ field.name ] = field.value;
        }
    } );

    books.push( formObject );

    appendToPage( formObject );
} );
