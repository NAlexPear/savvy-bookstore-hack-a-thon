export default function Book(book){
    return `
      <div>
          <h1>${book.name}</h1>
          <h2>${book.author}</h2>
          <h3>${book.price}</h3>
          <a href=""><img src="${book.pictureUrl}" alt="${book.name}"></a>
          <ul>
              <p>Selling Points:</p>
              <li>
                  ${book.sellingPoints[0]}
              </li>
              <li>
                  ${book.sellingPoints[1]}
              </li>
              <li>
                  ${book.sellingPoints[2]}
              </li>
          </ul>
      </div>
  `;
}
