// Put all of your jQuery and JavaScript in this document.
var book1 = {
    "id": 1,
    "title": "butt cakes",
    "author": "Garfield",
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

$("#book1 > .book-info > .title", ).text(book1.title);
$("#book2 > .book-info > .title", ).text(book2.title);
$("#book3 > .book-info > .title", ).text(book3.title);

$("#book1 > .book-info > .author", ).text(book1.author);
$("#book2 > .book-info > .author", ).text(book2.author);
$("#book3 > .book-info > .author", ).text(book3.author);

$("#book1 > .book-info > .price", ).text(book1.price);
$("#book2 > .book-info > .price", ).text(book2.price);
$("#book3 > .book-info > .price", ).text(book3.price);

$("#book1 > .book-discription > .sellingPoints", ).text(book1.sellingPoints);
$("#book2 > .book-discription > .sellingPoints", ).text(book2.sellingPoints);
$("#book3 > .book-discription > .sellingPoints", ).text(book3.sellingPoints);

$("#book1 > .book-img > img", ).attr({
  "src": book1.bookImage
});
$("#book2 > .book-img > img", ).attr({
  "src": book2.bookImage
});
$("#book3 > .book-img > img", ).attr({
  "src": book3.bookImage
});
