import Book from './Book';
import Form from './Form';


export default function Content(state){
    return `
        <div id ="content">
          <div>
            ${Book(state.books[0])}
            ${Book(state.books[1])}
            ${Book(state.books[2])}
            ${Book(state.books[3])}
          </div>
          ${Form()}
        </div>
    `;
}

