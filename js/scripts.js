/* globals $ */

// Put all of your jQuery and JavaScript in this document.
var products = {
    "books": [
        {
            "creator": "E. L. James",
            "image": "https://d188rgcu4zozwl.cloudfront.net/content/B007J4T2G8/resources/469708731",
            "price": 17.69,
            "sellingPoints": [
                "Lasagna is delicious.",
                "The essential guide to Italian casseroles of all types.",
                "Real G's move silent, like Lasagna. -Lil Wayne"
            ],
            "title": "50 Shades of Grey",
            "type": "book"
        },
        {
            "creator": "Garfield",
            "image": "https://images-na.ssl-images-amazon.com/images/I/51YUYsBp2CL._SX322_BO1,204,203,200_.jpg",
            "price": 17.69,
            "sellingPoints": [
                "Lasagna is delicious.",
                "The essential guide to Italian casseroles of all types.",
                "Real G's move silent, like Lasagna. -Lil Wayne"
            ],
            "title": "50 Shade of Gray",
            "type": "book"
        },
        {
            "creator": "Garfield",
            "image": "https://images-na.ssl-images-amazon.com/images/I/51HhuPD7WhL._SX322_BO1,204,203,200_.jpg",
            "price": 17.69,
            "sellingPoints": [
                "Lasagna is delicious.",
                "The essential guide to Italian casseroles of all types.",
                "Real G's move silent, like Lasagna. -Lil Wayne"
            ],
            "title": "50 Shade of Gray",
            "type": "book"
        }
    ],
    "albums": [
        {
            "creator": "Nas",
            "image": "https://audioxide.com/wp-content/uploads/2016/06/Illmatic-500x500.jpg",
            "price": 9.99,
            "sellingPoints": [
                "Lasagna is delicious.",
                "The essential guide to Italian casseroles of all types.",
                "Real G's move silent, like Lasagna. -Lil Wayne"
            ],
            "title": "Illmatic",
            "type": "album"
        },
        {
            "creator": "2Pac",
            "image": "http://3.bp.blogspot.com/_5A6fSMDiXaI/TRGA65YolHI/AAAAAAAAAmo/NknnnYHa0II/s1600/2Pac_-_All_Eyez_on_Me_single_version.jpg",
            "price": 9.99,
            "sellingPoints": [
                "Lasagna is delicious.",
                "The essential guide to Italian casseroles of all types.",
                "Real G's move silent, like Lasagna. -Lil Wayne"
            ],
            "title": "All Eyez On Me",
            "type": "album"
        },
        {
            "creator": "Milli Vanilli",
            "image": "https://direct.rhapsody.com/imageserver/images/Alb.117181854/500x500.jpg",
            "price": 9.99,
            "sellingPoints": [
                "Lasagna is delicious.",
                "The essential guide to Italian casseroles of all types.",
                "Real G's move silent, like Lasagna. -Lil Wayne"
            ],
            "title": "Girl You Know It's True",
            "type": "album"
        }
    ]
};

function appendToPage( item ){
    var $image = $( "<img>" ).attr( "src", item.image );
    var $title = $( "<h1>" ).text( item.title );
    var $creator = $( "<h2>" ).text( item.creator );
    var $price = $( "<h2>" ).text( "$" + item.price );
    var $sellingPoints = $( "<p>" ).text( item.sellingPoints );
    var $description = $( "<div>" ).append( $sellingPoints );
    var $info = $( "<div>" ).append( $title, $creator, $price );
    var $item = $( "<div>" ).append( $image, $info, $description );

    $( "#content" ).prepend( $item );
}

products.books.forEach( appendToPage );
products.albums.forEach( appendToPage );

$( "#books" ).click( () => console.log( products.books ) );
$( "#music" ).click( () => console.log( products.albums ) );

$( "form" ).on( "submit", ( event ) => {
    var data = $( event.target ).serializeArray();
    var formObject = {};

    event.preventDefault();

    formObject.sellingPoints = [];

    data.forEach( ( field ) => {
        if( field.name === "sellingPoints" ){
            formObject.sellingPoints.push( field.value );
        }
        else{
            formObject[ field.name ] = field.value;
        }
    } );

    products[formObject.type].push( formObject );

    appendToPage( formObject );
} );

// what's going on here?
$.ajax( "//api.savvycoders.com/books" ).then( ( books ) => console.log( "this is coming from an an external database/API ->", books ) );
