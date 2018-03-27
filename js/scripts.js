/* globals $ */

// Put all of your jQuery and JavaScript in this document.
var products = {
    "books": [],
    "albums": []
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

function handleItems( items ){
    products[items[0].type + "s"] = items;

    items.forEach( appendToPage );
}

$( "#books" ).click( ( event ) => {
    event.preventDefault();
    $( "#content" ).html( "" );

    products.books.forEach( appendToPage );
} );

$( "#music" ).click( () => {
    event.preventDefault();
    $( "#content" ).html( "" );

    products.albums.forEach( appendToPage );
} );

$( "#home" ).click( ( event ) => {
    event.preventDefault();
    $( "#content" ).html( "" );

    products.books.forEach( appendToPage );
    products.albums.forEach( appendToPage );
} );

$( "form" ).on( "submit", ( event ) => {
    var data = $( event.target ).serializeArray();
    var formObject = {};

    event.preventDefault();

    formObject.sellingPoints = [];

    data.forEach( ( field ) => {
        if( field.name === "sellingPoints" ){
            formObject.sellingPoints.push( field.value );
        }
        else if( field.name === "price" ){
            formObject.price = parseFloat( field.value, 0 );
        }
        else{
            formObject[field.name] = field.value;
        }
    } );

    products[formObject.type + "s"].push( formObject );

    appendToPage( formObject );

    $.ajax( "//api.savvycoders.com/" + formObject.type + "s", {
        "method": "POST",
        "contentType": "application/json",
        "data": JSON.stringify( formObject )
    } );
} );

$.ajax( "//api.savvycoders.com/books" ).then( handleItems );
$.ajax( "//api.savvycoders.com/albums" ).then( handleItems );
