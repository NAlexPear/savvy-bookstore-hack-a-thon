export default function Book(book = {}){
    return `
        <div>
            <h1>${book.name}</h1>
            <h2>${book.author}</h2>
            <h3>${book.price}</h3>
            <h3>Selling Points</h3>
            <ol>
                <li>${book.sellingPoints[0]}</li>
                <li>${book.sellingPoints[1]}</li>
                <li>${book.sellingPoints[2]}</li>
            </ol>
            <img src="${book.pictureUrl}" alt="">
        </div>
    `;
}

