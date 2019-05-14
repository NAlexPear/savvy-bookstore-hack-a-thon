import Book from "Book";

export default (states) => {
let booksHTML = '';
return states.books.forEach(book => bookHTML += `<figure>${Book(book)}</figure>`);
};