import Book from './Book';
import Form from './Form';

function booksBuilder(bookList){
    return bookList.map((book) => Book(book)).join(' ');
}

export default function Content(state){
    return `
        <div id ="content">
          <div>
            ${booksBuilder(state.books)}
          </div>
          ${Form()}
        </div>
    `;
}
