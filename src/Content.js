import Book from './Book';

function mapBooks(books){
    return books
        .map(book => Book(book))
        .join('');
}

export default function Content(books) {
    return `
     <div id="content">
        ${mapBooks(books)}
     </div> 
    `;
}