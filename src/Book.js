export default function Book(book){
    return `
        <div>
        <h1>${book.name}</h1>
        <h2>${book.author}</h2>
        <h3>${book.price}</h3>
        </div>
    `;
}