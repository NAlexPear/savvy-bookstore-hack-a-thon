/* globals $ */
// Put all of your jQuery and JavaScript in this document
var products = {
    "books": $.ajax( "http://localhost:3000/books" ),
    "music": $.ajax( "http://localhost:3000/music" )
};

function parseProduct( item ){
    var name = "<h1 class='name'>" + item.name + "</h1>";
    var author = "<h3 class='author'>" + item.author + "</h3>";
    var price = "<h3 class='price'>" + item.price + "</h3>";
    var picture = "<img class='picture' src='" + item.picture + "'/>";
    var points = item[ "sellingPoints" ];
    var sellingPoints = points.reduce(
      ( acc, point ) => acc += "<li>" + point + "</li>",
      "<ul class='selling-points'>"
    ) + "</ul>";

    return "<div id='#" + item.type + item.id + "'>" +
      name +
      author +
      price +
      picture +
      sellingPoints +
      "</div>";
}

function displayProduct( type ){
    products[type].then( ( items ) => {
        var parsedProducts = items.map( parseProduct );

        $( ".content" ).html( parsedProducts );
    } );
}

$( "button" ).on( "click", ( event ) => {
    var target = $( event.target ).attr( "class" );

    displayProduct( target );
} );

displayProduct( "books" );

$( "form" ).on( "submit", ( event ) => {
    var vals = Array
      .from( document.querySelectorAll( 'input[type="text"]' ) )
      .map( ( input ) => $( input ).val() );

    event.preventDefault();

    $.ajax( "http://localhost:3000/" + vals[0], {
        "type": "POST",
        "contentType": "application/json",
        "data": JSON.stringify( {
            "type": vals[0],
            "name": vals[1],
            "author": vals[2],
            "picture": vals[4],
            "price": vals[3],
            "sellingPoints": [
                "thing 1",
                "thing 2",
                "thing 3"
            ]
        } )
    } );

    products[vals[0]] = $.ajax( "http://localhost:3000/" + vals[0] );

    displayProduct( vals[0] );
} );
