export default function Book(book){
    return `
        <div>
            <h1>${book.name}</h1>
            <h2>${book.author}</h2>
            <h3>${book.price}</h3>
            <h3>${book.sellingPoints}</h3>
            <ol>
                <li>First Point</li>
                <li>Second Point</li>
                <li>Third Point</li>
            </ol>
            <img src = "" alt = "">
        </div>
    `;
}

