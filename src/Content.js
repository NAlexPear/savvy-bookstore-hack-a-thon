import Book from "./Book"

export default function Content(state) {
    var list = '';
  
    for (let i = 0; i < state.books.length; i++) {
        list += Book(state.books[i]);
    };
  
    return `
        <div id="content">
            ${list}
        </div>
    `;
}