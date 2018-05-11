// Put all of your jQuery and JavaScript in this document.
var book1 = {
    "id": 1,
    "name": "How Not to Scare Kids",
    "author": "Iceberg Slim",
    "pictureUrl": "http://cdn3.momsxyz.com/2015/04/image001.jpg",
    "price": 10,
    "sellingPoints": [
        "Hiding In The closet.",
        "Never Ask a 2yr old for tissue.",
        "Be A Friend Before A Parent."
    ]
};

var book2 = {
    "id": 2,
    "name": "Apples to Oranges",
    "author": "Farmer Fred",
    "pictureUrl": "http://strongautomotive.com/wp-content/uploads/2014/11/Apple-Orange-2.jpg",
    "price": 8,
    "sellingPoints": [
        "Home Grown Food.",
        "Processed Food.",
        "Chitterlings vs. Veggies."
    ]
};

var book3 = {
    "id": 3,
    "name": "Queens and Kings",
    "author": "Shaka Zulu",
    "pictureUrl": "https://i.pinimg.com/originals/a6/f6/f8/a6f6f872fc9ba5cd80d37971b15e7a1c.jpg",
    "price": 115,
    "sellingPoints": [
        "Killing a Tiger With a Twig.",
        "How to Rule a Nation.",
        "Wearing the Crown."
    ]
};

var bookTitleVariable = "<div class='title'><header><h1>" + book1.name + "</h1></header></div>";
var bookAuthorVariable = "<div class='author'><h2>" + book1.author + "</h2></div>";
var bookImageVariable = "<div class='image'><img src='" + book1.pictureUrl + "' alt=''>"
var bookPriceVariable = "<ul class='price'"
document.querySelector("#book1").innerHTML = bookTitleVariable + bookAuthorVariable + bookImageVariable





book += "name:" + bookName + ",";
book += "author:" + authorName + ",";
book += "pictureUrl:" + pictureUrl + ",";
book += "price:" + price + ",";
book += "sellingPoint:" sellingPoint + "}";
