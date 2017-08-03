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

$( "#book1 .name").text(book1.name);
$( "#book1 .author").text(book1.author);
$( "#book1 .price").text(book1.price);
$( "#book1 .picture").attr( "src", book1.picture );


$( "#book2 .name").text(book2.name);
$( "#book2 .author").text(book2.author);
$( "#book2 .price").text(book2.price);
$( "#book2 .picture").attr( "src", book2.picture );


$( "#book3 .name").text(book3.name);
$( "#book3 .author").text(book3.author);
$( "#book3 .price").text(book3.price);
$( "#book3 .picture").attr( "src", book3.picture );


$( "#book4 .name").text(book4.name);
$( "#book4 .author").text(book4.author);
$( "#book4 .price").text(book4.price);
$( "#book4 .picture").attr( "src", book4.picture );
