export default function Book(book){
    return `
        <div>
            <h1>${book.name}</h1>
            <h2>${book.author}</h2>
            <h3>${book.price}</h3>
            <h3>Selling Points</h3>
            <ol>
                <li>${book.sellingPoint[0]}</li>
                <li>${book.sellingPoint[1]}</li>
                <li>${book.sellingPoint[2]}</li>
            </ol>
            <img src = "" alt = "">
        </div>
    `;
}

