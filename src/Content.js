import Book from "./Book"

export default function Content(state) {
    // from state, get array of books
    // for book in books, send book object to Book.js
    // add Book.js to Content
    // send template string HTML to index.js
    for (let i = 0; i < state.books.length; i++) {
        var list += Book(state.books[i]);
    };
    return `
        <div id="content">
            ${list}
        </div>
    `;
}