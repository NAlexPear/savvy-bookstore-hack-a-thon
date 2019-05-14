import Book from "Book";

const buildBooksHTML = (state) => {
    let booksHTML = '';
    state.books.forEach(book => bookHTML += `<figure>${Book(book)}</figure>`);
    return booksHTML;
    };

export default (states) => `buildBooksHTML(${states})`;