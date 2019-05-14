import Book from "Book";

const buildBooksHTML = (states) => {
    let booksHTML = '';
    states.books.forEach(book => bookHTML += `<figure>${Book(book)}</figure>`);
    return booksHTML;
    };

export default buildBooksHTML;