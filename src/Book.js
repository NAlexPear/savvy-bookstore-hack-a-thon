export default function Book(book){
    return `
      <div>
          <h1>${book.title}</h1>
          <h2>${book.creator}</h2>
          <h3>${book.price}</h3>
          <a href=""><img src="${book.image}" alt="${book.title}"></a>
          <ul>
              <p>Selling Points:</p>
              <li>
                  ${book.selling_points[0]}
              </li>
              <li>
                  ${book.selling_points[1]}
              </li>
              <li>
                  ${book.selling_points[2]}
              </li>
          </ul>
      </div>
  `;
}
