/* globals $ */
// Put all of your jQuery and JavaScript in this document
function bookinfo( item ){
    var name = "<h1 class='name'>" + item.name + "</h1>";
    var author = "<h3 class='author'>" + item.author + "</h3>";
    var price = "<h3 class='price'>" + item.price + "</h3>";
    var picture = "<img class='picture' src='" + item.picture + "'/>";
    var points = item[ "sellingPoints" ];
    var sellingPoints = points.reduce(
      ( acc, point ) => acc += "<li>" + point + "</li>",
      "<ul class='selling-points'>"
    ) + "</ul>";

    return "<div id='#book" + item.id + "'>" +
      name +
      author +
      price +
      picture +
      sellingPoints +
      "</div>";
}

$.ajax( "http://localhost:3000/books" ).then( ( books ) => {
    var parsedBooks = books.map( bookinfo );

    $( ".content" ).prepend( parsedBooks );
} );
