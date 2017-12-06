// Put all of your jQuery and JavaScript in this document.
/* globals $ */

var products = [
    {
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
    },
    {
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
    },
    {
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
    }
];

function appendToPage( productObject ){
    var $newContent = $( "<div>" );
    var $sellingPoints = $( "<div>" );
    var imageSrc = productObject.pictureUrl || productObject.picture;

    for( var i = 0; i < productObject.sellingPoints.length; i++ ){
        $sellingPoints.append( "<p>" + productObject.sellingPoints[i] + "</p>" );
    }

    $newContent
        .append( "<h1>" + productObject.name + "</h1>" )
        .append( "<h2>" + productObject.author + "</h2>" )
        .append( "<img src='" + imageSrc + "'/>" )
        .append( "<h2>$" + productObject.price + "</h2>" )
        .append( $sellingPoints );

    $( "#content" ).append( $newContent );
}


for( var i = 0; i < products.length; i++ ){
    appendToPage( products[i] );
}

$( "form" ).on( "submit", ( event ) => {
    var data = $( event.target ).serializeArray();
    var formObject = {};

    event.preventDefault();

    formObject.id = products.length + 1;
    formObject.sellingPoints = [];

    data.forEach( ( field ) => {
        if( field.name === "sellingPoints" ){
            formObject.sellingPoints.push( ...field.value.split( "\n" ) );
        }
        else{
            formObject[ field.name ] = field.value;
        }
    } );

    products.push( formObject );

    appendToPage( formObject );
} );
