// Put all of your jQuery and JavaScript in this document.
/* globals $ */
$( ".category" ).on( "click", ( event ) => {
    event.preventDefault();

    console.dir( event.target.attributes.href.value );

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
        for( var i = 0; i < products.length; i++ ){
            appendToPage( products[i] );
        }
    }
);

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
