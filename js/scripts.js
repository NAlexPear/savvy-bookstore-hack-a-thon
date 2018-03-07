// Put all of your jQuery and JavaScript in this document.
var book1 = {
    "id": 1,
    "title": "50 Shades of Grey",
    "author": "E. L. James",
    "bookImage": "https://d188rgcu4zozwl.cloudfront.net/content/B007J4T2G8/resources/469708731",
    "price": 17.69,
    "sellingPoints": [
        "Lasagna is delicious.",
        "The essential guide to Italian casseroles of all types.",
        "Real G's move silent, like Lasagna. -Lil Wayne"
    ]
}

var book2 = {
    "id": 2,
    "title": "50 Shade of Gray",
    "author": "Garfield",
    "bookImage": "https://images-na.ssl-images-amazon.com/images/I/51YUYsBp2CL._SX322_BO1,204,203,200_.jpg",
    "price": 17.69,
    "sellingPoints": [
        "Lasagna is delicious.",
        "The essential guide to Italian casseroles of all types.",
        "Real G's move silent, like Lasagna. -Lil Wayne"
    ]
}
var book3 = {
    "id": 3,
    "title": "50 Shade of Gray",
    "author": "Garfield",
    "bookImage": "https://images-na.ssl-images-amazon.com/images/I/51HhuPD7WhL._SX322_BO1,204,203,200_.jpg",
    "price": 17.69,
    "sellingPoints": [
        "Lasagna is delicious.",
        "The essential guide to Italian casseroles of all types.",
        "Real G's move silent, like Lasagna. -Lil Wayne"
    ]
}

// @TODO: replace lines 41 and 42 with the function created from lines 45 on
$("#book2 img").attr("src", book2.bookImage)
$("#book3 img").attr("src", book3.bookImage)

// @TODO: convert all of this logic into a separate function
var $image = $("<img>").attr("src", book1.bookImage)
var $title = $("<h1>").text(book1.title)
var $author = $("<h2>").text(book1.author)
var $price = $("<h2>").text("$" + book1.price)
var $sellingPoints = $("<p>").text(book1.sellingPoints)
var $description = $("<div>").append($sellingPoints)
var $info = $("<div>").append($title, $author, $price)
var $book1 = $("<div>").append($image, $info, $sellingPoints)

$("#content").prepend($book1)
