// Put all of your jQuery and JavaScript in this document.
var book1 = {
    "id": 1,
    "name": "Adorable Puppies",
    "author": "Binkey McGillocuddy",
    "picture": "http://wallpapercave.com/wp/N2lOzO4.jpg",
    "price": 9.95,
    "selling-points": [
        "Pugs Rule",
        "Pugs are Sweet",
        "Everybody Loves Pugs"
    ]
};
var book2 = {
    "id": 2,
    "name": "Granite City Soul Suckers",
    "author": "Bela Lugosi",
    "picture": "http://medias.photodeck.com/abc3ec2e-e46d-11e0-8813-0175b4d176d6/100514_IND_003_xgaplus.jpg",
    "price": 2.00,
    "selling-points": [
        "If you Haven't Been, Don't Go",
        "Get Mugged Fast",
        "Steal Your Car"
    ]
};
var book3 = {
    "id": 3,
    "name": "JavaScript is SAVVY",
    "author": "Benevolent Dictator",
    "picture": "https://www.codementor.io/assets/page_img/learn-javascript.png",
    "price": 45.99,
    "selling-points": [
        "Learn JavaScript",
        "Survive Your First ReFactor",
        "Free Coffee"
    ]
};
var book4 = {
    "id": 4,
    "name": " Monty Python (the Expurgated Version)",
    "author": "Noel HamWrapper",
    "picture": "http://media.topito.com/wp-content/uploads/2014/10/python1.jpg",
    "price": 30.00,
    "selling-points": [
        "Toupee Spam Muppet",
        "Decal Slide Off My Car",
        "Whatever You Can Steal"
    ]
};
var book5 = {
    "id": 5,
    "name": " Monty Python 2: Electric Boogaloooo",
    "author": "Noel HamWrapper",
    "picture": "http://media.topito.com/wp-content/uploads/2014/10/python1.jpg",
    "price": 50.00,
    "selling-points": [
        "Toupee Spam Muppet",
        "Decal Slide Off My Car",
        "Whatever You Can Steal",
        "Look, another selling point!"
    ]
};

var $container = $( ".content" );

function bookinfo( item ){
  var name = "<h1 class='name'>" + item.name + "</h1>";
  var author = "<h3 class='author'>" + item.author + "</h3>";
  var price = "<h3 class='price'>" + item.price + "</h3>";
  var picture = "<img class='picture' src='" + item.picture + "'/>";
  var sellingPoints = "<ul class='selling-points'>";
  var points = item[ "selling-points" ];
  
  var i = 0;

  while( i < points.length ){
    sellingPoints += "<li>" + points[i] + "</li>";

    i++;
  }

  sellingPoints += "</ul>";

  $container.prepend(
    "<div id='#book" + item.id + "'>"
      + name
      + author
      + price
      + picture
      + sellingPoints
      + "</div>"
  );
};


bookinfo( book5 );
bookinfo( book4 );
bookinfo( book3 );
bookinfo( book2 );
bookinfo( book1 );
