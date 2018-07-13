import Book from './Book'

export default function Content(books){
    return `
        <div id="content">
            ${Book(books[0])}
            ${Book(books[1])}
            ${Book(books[2])}
        </div>
    `;
}
