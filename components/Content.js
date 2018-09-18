import Book from './Book';
import Input from './Input';

export default function Content(bookArray){
    var bookList = '';

    for(let i = 0; i < bookArray.length; i++){
        bookList += Book(bookArray[i]);
    }

    return `
    <div id="content">
        ${bookList}
        ${Input()}
    </div>
    `;
}