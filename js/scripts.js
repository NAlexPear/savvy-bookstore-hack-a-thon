// Put all of your jQuery and JavaScript in this document.
/* globals $ */
var loadedProducts = [];

$( ".category" ).on( "click", ( event ) => {
    event.preventDefault();

    $.ajax( "https://api.savvycoders.com" + event.target.attributes.href.value ).then(
        ( products ) => {
            for( var i = 0; i < products.length; i++ ){
                appendToPage( products[i] );
            }
        }
    );
} );

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


$.ajax( "https://api.savvycoders.com/books" ).then(
    ( products ) => {
        loadedProducts = products;

        for( var i = 0; i < products.length; i++ ){
            appendToPage( products[i] );
        }
    }
);

$( "form" ).on( "submit", ( event ) => {
    var data = $( event.target ).serializeArray();
    var formObject = {};
    var postOptions = {
        "method": "POST"
    };

    event.preventDefault();

    formObject.id = loadedProducts.length + 1;
    formObject.sellingPoints = [];

    data.forEach( ( field ) => {
        if( field.name === "sellingPoints" ){
            formObject.sellingPoints.push( ...field.value.split( "\n" ) );
        }
        else{
            formObject[ field.name ] = field.value;
        }
    } );

    loadedProducts.push( formObject );

    appendToPage( formObject );
    $.ajax( "https://api.savvycoders.com/books", postOptions )
        .then(
            () => console.log( "It works!" )
        )
        .catch(
            () => console.log( "Error!" )
        );
} );
