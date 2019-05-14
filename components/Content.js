import Book from "./Book";

function buildBooksHTML(state) {
    let booksHTML = '';
    
    state.books.forEach(book => booksHTML += `<figure>${Book(book)}</figure>`);
    
    return booksHTML;
    };
export default (states) => `${buildBooksHTML(states)}`;