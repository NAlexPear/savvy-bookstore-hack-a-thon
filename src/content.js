import Book from './Book'

export default function Content(books){
    return `
        <div id="content">
            ${Book()}
            ${Book()}
            ${Book()}
        </div>
    `;
}
