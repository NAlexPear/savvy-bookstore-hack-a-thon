import Book from "Book";

export default (states) => {
let booksHTML = '';
states.books.forEach(book => bookHTML += `<figure>${Book(book)}</figure>`);
return booksHTML;
};