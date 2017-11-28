// Put all of your jQuery and JavaScript in this document.
/* globals $ */

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


$( "#book1 h1" ).text( book1.name );
$( "#book1 h2" )
    .first()
    .text( book1.author );

$( "#book1 img" ).attr( { "src": book1.pictureUrl } );
$( "#book1 h2 > span.price" ).text( book1.price );

$( "#book1 p" )
    .first()
    .text( book1.sellingPoints[0] );

$( "#book1 p" )
    .first()
    .next()
    .text( book1.sellingPoints[1] );

$( "#book1 p" )
    .last()
    .text( book1.sellingPoints[2] );


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
