/* globals $ */
// Put all of your jQuery and JavaScript in this document
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

$( "button" ).on( "click", ( event ) => {
    var target = $( event.target ).attr( "class" );

    $.ajax( "http://localhost:3000/" + target ).then( ( products ) => {
        var parsedProducts = products.map( parseProduct );

        $( ".content" ).prepend( parsedProducts );
    } );
} );
